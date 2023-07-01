import { useEffect, useState } from "react";
import {SeearchPanel} from "./search-panel";
import {List} from "./list";
import {cleanObject} from "../../utils";
import * as qs from "qs"
const baseApi = process.env.REACT_APP_API_URL;
export const Projectlist = () => {
  const [param, setParam] = useState({
    name: "",
    perdonId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ddld=  cleanObject(param)
    const ddd=  qs.stringify(cleanObject(param));
    fetch(`${baseApi}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${baseApi}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SeearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users}></List>
    </div>
  );
};
