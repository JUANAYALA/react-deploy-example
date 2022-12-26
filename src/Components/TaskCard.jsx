import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({task}){
  const {deleteTasks} = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-mono capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm py-3">{task.description}</p>
      <button className="bg-orange-500 px-4 py-2 rounded-md" onClick={() => deleteTasks(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
