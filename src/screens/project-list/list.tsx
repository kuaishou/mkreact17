import { Table } from "antd";
import { User } from "./search-panel";
import { Link } from "react-router-dom";
import { Pin } from "components/pin";
import dayjs from "dayjs";
import { useEditProject } from "utils/project";
export interface Project {
  id: number;
  name: string;
  title: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface listProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: listProps) => {
  const { mutate } = useEditProject();
  // const { mutate } = useEditProject( useProjectsQueryKey() )
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin });
  const columns = [
    {
      title: <Pin checked={true} disabled={true} />,
      render(value, project: Project) {
        return (
          <Pin checked={project.pin} onCheckedChange={pinProject(project.id)} />
        );
      },
    },
    {
      title: "名称",
      key: "name",
      dataIndex: "name",
      render(value: any, project: Project) {
        // 在一个Route下使用Link  会自动当做当前的子路由  /project   => /projetc/5
        return <Link to={String(project.id)}>{project.name}</Link>;
      },
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "部门 ",
      dataIndex: "organization",
    },

    {
      title: "负责人",
      key: "name",
      dataIndex: "name",
      render(value: any, project: { personId: number }) {
        return (
          <span>
            {users.find((user) => user.id === project.personId)?.name || "未知"}
          </span>
        );
      },
    },
    {
      title: "创建时间",
      render(value: any, project: { created: any }) {
        return (
          <span>
            {project.created
              ? dayjs(project.created).format("YYYY-MM-DD")
              : "无"}
          </span>
        );
      },
    },
  ];
  return <Table pagination={false} dataSource={list} columns={columns} />;
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>名称</th>
  //         <th>负责人</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list.map((project) => (
  //         <tr key={project.name}>
  //           <td>{project.name}</td>
  //           <td>
  //             {users.find((user) => user.id === project.personId)?.name ||
  //               "未知"}
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
};
