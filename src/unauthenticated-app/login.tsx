import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react";
export const LoginScreen = () => {
  // 使用Context取代下面请求形式
  const { login, user } = useAuth();

  const onFinish = (values: { username: string; password: string }) => {
    login(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {user ? <div>登录成功token{user.token}</div> : null}
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} id={"username"} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入用密码" }]}
      >
        <Input type="password" placeholder={"密码"} id={"password"} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;

  //   login({ username, password });
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     {user ? <div>登录成功token{user.token}</div> : null}
  //     <div>
  //       <label htmlFor="userNname">用户名</label>
  //       <input type="text" id={"username"} />
  //     </div>
  //     <div>
  //       <label htmlFor="password">密码</label>
  //       <input type="password" id={"password"} />
  //     </div>
  //     <button type={"submit"}>登录</button>
  //   </form>
  // );
};
