import { useAuth } from "context/auth-context";
import { Projectlist } from "screens/project-list";
import { useDocumentTitle } from "utils";

export const AuthenticatedApp = () => {
  useDocumentTitle("项目列表");
  const { loginOut } = useAuth();
  return (
    <div>
      <button onClick={() => loginOut()}> 退出登录</button>
      <Projectlist></Projectlist>
    </div>
  );
};
