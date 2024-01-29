export function filterData(data: TaskT[], filter: string) {
  if (filter === "All") return data;
  if (filter === "Done") return data.filter((d) => d.isDone);
  return data.filter((d) => !d.isDone);
}

export function isLogedIn() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("logedIn="));
  if (cookieValue === "logedIn=1") return true;
  return false;
}
