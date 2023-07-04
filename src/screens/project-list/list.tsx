import { Table } from "antd";
import { User } from "./search-panel";
import { Link } from "react-router-dom";
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
  const columns = [
    {
      title: "名称",
      key: "title",
      dataIndex: "title",
      render(value: any, project: Project) {
        // 在一个Route下使用Link  会自动当做当前的子路由  /project   => /projetc/5
        return <Link to={String(project.id)}>{project.name}</Link>;
      },
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
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
