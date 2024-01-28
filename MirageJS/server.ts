import { createServer } from "miragejs";

export default function makeServer() {
  let server = createServer({
    seeds(server) {
      server.db.loadData({
        tasks: [{ id: `123`, title: "hello", desc: "get some", isDone: true }],
      });
    },
    routes() {
      this.namespace = "api";
      this.get(
        "/tasks",
        (schema) => {
          const data = schema.db.tasks;
          return data;
        },
        { timing: 1000 }
      );
      this.post(
        "/tasks",
        (schema, request) => {
          const newTask = JSON.parse(request.requestBody);
          return schema.db.tasks.insert(newTask);
        },
        { timing: 2000 }
      );
      this.delete(
        "/tasks",
        (schema, request) => {
          const id = request.requestBody;
          schema.db.tasks.remove(id);
          return null;
        },
        { timing: 500 }
      );
      this.patch(
        "/tasks",
        (schema, request) => {
          const updTask = JSON.parse(request.requestBody);
          schema.db.tasks.update(updTask.id, updTask);
          return null;
        },
        { timing: 500 }
      );
    },
  });

  return server;
}
