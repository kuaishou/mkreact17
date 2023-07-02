import { useAuth } from "context/auth-context";
import { Projectlist } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { loginOut } = useAuth();
  return (
    <div>
      <button onClick={() => loginOut}> 退出登录</button>
      <Projectlist></Projectlist>
    </div>
  );
};
