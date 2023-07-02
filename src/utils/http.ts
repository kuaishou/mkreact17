import * as qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";
const baseApi = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoinit: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/jon" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoinit += "?" + qs.stringify(data);
  } else {
    config.body = qs.stringify(data);
  }
  return window
    .fetch(`${baseApi}/${endpoinit}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        //登录态失效退出登录
        await auth.loginOut();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
