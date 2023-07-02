import { useAuth } from "context/auth-context";
import { FormEvent } from "react";
export const LoginScreen = () => {
  // 使用Context取代下面请求形式
  const { login, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功token{user.token}</div> : null}
      <div>
        <label htmlFor="userNname">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
