import { useEffect, useState } from "react";
import { SeearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useDebounce } from "../../utils";
import { useHttp } from "utils/http";
import { useUrlQueryParam } from "utils/url";

export const Projectlist = () => {
  const [, setParam] = useState({
    name: "",
    personId: "",
  });
  const [param] = useUrlQueryParam(["name", "personId"]);

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 500); //500毫秒防抖
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then((res) =>
      setList(res)
    );
    // fetch(
    //   `${baseApi}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);
  useEffect(() => {
    console.log("加载了");
    client("users").then((res) => setUsers(res));

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SeearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users}></List>
    </div>
  );
};

Projectlist.whyDidYouRender = true;
