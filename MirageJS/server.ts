import { Registry, createServer } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

type ValidateFuncT = (
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  cred: { email: string; password: string }
) => string;

export default function makeServer() {
  let server = createServer({
    seeds(server) {
      server.db.loadData({
        tasks: [{ id: `123`, title: "hello", desc: "get some", isDone: true }],
        users: [{ email: "test@test.coms", password: "1122334" }],
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
        { timing: 1000 }
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
      this.post(
        "/login",
        (schema, request) => {
          const cred = JSON.parse(request.requestBody);
          const res = validateLogin(schema, cred);
          return res;
        },
        { timing: 2000 }
      );
      this.post(
        "/sign-up",
        (schema, request) => {
          const cred = JSON.parse(request.requestBody);
          const res = validateSignUp(schema, cred);
          return res;
        },
        { timing: 2000 }
      );
    },
  });
  return server;
}

const validateLogin: ValidateFuncT = (schema, cred) => {
  const user = schema.db.users.findBy({ email: cred.email });
  if (!user) return "wrong email";
  if (user.password !== cred.password) return "wrong password";
  return "success";
};

const validateSignUp: ValidateFuncT = (schema, cred) => {
  const user = schema.db.users.findBy({ email: cred.email });
  if (user) return "email-already-in-use";
  schema.db.users.insert(cred);
  return "success";
};
