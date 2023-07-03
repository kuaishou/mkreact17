import { Select, Input } from "antd";

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface searchPanelPrors {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: searchPanelPrors["param"]) => void;
}
export const SeearchPanel = (props: searchPanelPrors) => {
  const { param, setParam, users } = props;

  return (
    <form action="">
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        />
      </div>
      <div>
        <Select
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id + user.name} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
