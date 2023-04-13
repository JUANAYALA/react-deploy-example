import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescripction] = useState("");
  const {createTasks} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();    
    createTasks({
      title,
      description
    }) 
    setTitle("")
    setDescripction("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="bg-gray-800 text-white p-4 rounded-md"
          placeholder="Ingrese la Novedad"
          onChange={(e) => (setTitle(e.target.value))}
          value={title}
          />
        </div>
        <br />
        <div>
          <textarea className="bg-gray-800 text-white p-4 rounded-md"
          cols="30" rows="10"
          placeholder="Ingrese la descripción de la novedad"
          onChange={(e) => (setDescripction(e.target.value))}
          value={description}
          />
        </div>

        <br />
        <button className="bg-orange-500 px-4 py-2 rounded-md">
            Guardar
        </button>

       
      </form>
    </div>
  );
}

export default TaskForm;
