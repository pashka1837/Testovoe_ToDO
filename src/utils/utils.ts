export function filterData(data: TaskT[], filter: string) {
  if (filter === "All") return data;
  if (filter === "Done") return data.filter((d) => d.isDone);
  return data.filter((d) => !d.isDone);
}
