export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
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
        <input
          type="text"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        />
      </div>
      <div>
        <select
          name=""
          id=""
          value={param.personId}
          onChange={(e) => setParam({ ...param, personId: e.target.value })}
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id + user.name} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
