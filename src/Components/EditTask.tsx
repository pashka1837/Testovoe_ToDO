import { useState } from "react";
import ModalBG from "./ModalBG";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useUpdTaskMutation } from "../services/tasksAPI";
import { setCurTask, setEditTaskOpen } from "../feature/appSlice";
import ModifyTask from "./ModifyTask/ModifyTask";

export default function EditTask() {
  const dispatch = useAppDispatch();
  const [updTask] = useUpdTaskMutation();
  const task = useAppSelector((store) => store.app.curTask);

  const { title, desc } = task!;

  const [inputs, setInputs] = useState<InputsStateT>({
    title,
    desc,
  });

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    const editTask: TaskT = {
      ...task!,
      title: inputs.title,
      desc: inputs.desc,
    };
    updTask(editTask);
    setInputs({ title: "", desc: "" });
    dispatch(setCurTask(null));
    dispatch(setEditTaskOpen(false));
  }

  const componValues: ComponValuesT = {
    formName: "Edit Task",
    plcHldrTitle: "Enter title of task",
    plcHldrDesc: "Enter description of task",
    btnName: "Edit Task",
    dfltTitle: title,
    dfltDesc: desc,
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
