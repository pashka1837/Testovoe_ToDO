import { nanoid } from "nanoid";
import { useState } from "react";
import ModifyTask from "./ModifyTask/ModifyTask";
import ModalBG from "./ModalBG";
import { useAppDispatch } from "../hooks/hooks";
import { setCreateTaskOpen } from "../feature/appSlice";
import { usePostTasksMutation } from "../services/tasksAPI";

export default function CreateTask() {
  const dispatch = useAppDispatch();
  const [postTasks] = usePostTasksMutation();

  const [inputs, setInputs] = useState<InputsStateT>({ title: "", desc: "" });

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    const newTask: TaskT = {
      ...inputs,
      id: nanoid(),
      isDone: false,
    };
    postTasks(newTask);
    setInputs({ title: "", desc: "" });
    dispatch(setCreateTaskOpen(false));
  }

  const componValues: ComponValuesT = {
    formName: "Create Task",
    plcHldrTitle: "Enter title of task",
    plcHldrDesc: "Enter description of task",
    btnName: "Create Task",
    dfltTitle: "",
    dfltDesc: "",
  };

  return (
    <ModalBG>
      <ModifyTask
        componValues={componValues}
        inputs={inputs}
        handleInpChange={handleInpChange}
        handleSubmit={handleSubmit}
      />
    </ModalBG>
  );
}
