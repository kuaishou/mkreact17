import { Select, Input } from "antd";
import { IdSelect } from "components/id-select";
import { Project } from "./list";

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
  param: Partial<Pick<Project, "name" | "personId">>;
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
        <IdSelect
          defaultOprionName="负责人"
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
          options={users || []}
        ></IdSelect>
        {/* <Select
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id + user.name} value={String(user.id)}>
              {user.name}
            </Select.Option>
          ))}
        </Select> */}
      </div>
    </form>
  );
};
