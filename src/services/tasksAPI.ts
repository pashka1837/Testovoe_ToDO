// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tasksAPI = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<TaskT[], void>({
      query: () => ({
        url: `api/tasks`,
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map((task) => ({ type: "Task" as const, id: task.id })),
              "Task",
            ]
          : ["Task"],
    }),
  }),
});

export const { useGetTasksQuery } = tasksAPI;
export const useQueryStateResult = () =>
  tasksAPI.endpoints.getTasks.useQueryState();
