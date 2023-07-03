import Card from "antd/lib/card";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterSreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? (
          <RegisterSreen></RegisterSreen>
        ) : (
          <LoginScreen></LoginScreen>
        )}
        <button onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? "登录" : "注册"}
        </button>
      </Card>
    </div>
  );
};
