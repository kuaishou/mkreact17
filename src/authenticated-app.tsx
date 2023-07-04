import { useAuth } from "context/auth-context";
import { Projectlist } from "screens/project-list";
import { ProjectScreen } from "screens/project";
import { useDocumentTitle } from "utils";
import { Navigate, Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
export const AuthenticatedApp = () => {
  useDocumentTitle("项目列表");
  const { loginOut } = useAuth();
  return (
    <div>
      <button onClick={() => loginOut()}> 退出登录</button>
      {/* <Projectlist></Projectlist> */}
      <BrowserRouter>
        <Routes>
          <Route
            path={"/projects"}
            element={<Projectlist></Projectlist>}
          ></Route>
          <Route path={"/projects/:projectId/*"} element={<ProjectScreen />} />
          <Route
            path="*"
            element={<Navigate to="/projects" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
