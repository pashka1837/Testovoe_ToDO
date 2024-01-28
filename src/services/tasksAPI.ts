// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
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
    postTasks: builder.mutation<TaskT, TaskT>({
      query: (task) => ({
        url: `api/tasks`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: (arg) => [{ type: "Task" as const, id: arg!.id }],
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksAPI.util.updateQueryData("getTasks", undefined, (draft) => {
            draft.push(task);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
    }),
  }),
});

export const { useGetTasksQuery, usePostTasksMutation } = tasksAPI;
export const useQueryStateResult = () =>
  tasksAPI.endpoints.getTasks.useQueryState();
