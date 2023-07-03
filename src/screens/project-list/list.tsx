import { Table } from "antd";
import { User } from "./search-panel";
export interface projest {
  id: string;
  name: string;
  email: string;
  title: string;
  personId: number;
  organization: string;
}

interface listProps {
  list: projest[];
  users: User[];
}
export const List = ({ list, users }: listProps) => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "负责人",
      key: "tags",
      dataIndex: "tags",
      render: (value: any, project: { personId: number }) => {
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
