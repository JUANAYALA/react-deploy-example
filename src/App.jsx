import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";


function App() {  
  return (
    <main className="bg-slate-600 h-screen">
      <div className="container mx-auto">
      <br />
        <h1 className="text-center text-4xl">Seccion de crear tarea</h1>
        <br />
        <TaskForm />
        <br />
        <hr />
        <br />
        <h1 className="text-center text-4xl">Seccion de tarea</h1>
        <br />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
