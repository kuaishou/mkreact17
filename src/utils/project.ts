import { useHttp } from "./http";
import { QueryKey, useMutation, useQuery } from "react-query";
// import { useAddConfig, useDeleteConfig, useEditConfig } from './use-optimistic-update'
import { Project } from "types/projects";
import { cleanObject } from "utils";
import { useAsync } from "./use-async";

// export const useProjects = (param?: Partial<Project>) => {
//   const http = useHttp()
//   // 'projects', param 谁变化 就触发
//   return useQuery<Project[], Error>(['projects', cleanObject(param)], () => http('projects', { data: param }))
// }

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    run(
      client(`projects/${params.id}`, {
        data: JSON.parse(JSON.stringify(params)),
        method: "PATCH",
      })
    );
  };
  return { mutate, ...asyncResult };
};

// React Hook 只能放在最顶层
// export const useEditProject = (queryKey: QueryKey) => {
//   const client = useHttp()
//   return useMutation(
//     (params: Partial<Project>) =>
//       client(`projects/${params.id}`, {
//         method: 'PATCH',
//         data: params,
//       }),
//     // useEditConfig(queryKey),
//   )
// }
export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects`, {
        data: params,
        method: "POST",
      })
    // useAddConfig(queryKey),
  );
};

export const useDeleteProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`projects/${id}`, {
        method: "DELETE",
      })
    // useDeleteConfig(queryKey),
  );
};

export const useProject = (id?: number) => {
  const client = useHttp();
  return useQuery<Project>(
    ["project", { id }],
    () => client(`projects/${id}`),
    {
      enabled: Boolean(id),
    }
  );
};
