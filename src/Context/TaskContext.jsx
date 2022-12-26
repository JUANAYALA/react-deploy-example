import { createContext } from "react";
import { tasks as data } from "../Data/tasks";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTasks(task) {
        setTasks([
        ...tasks,
        {
            id: tasks.length,
            title: task.title,
            description: task.description,
        },
        ]);
    }
    function deleteTasks(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
        value={{
            tasks,
            createTasks,
            deleteTasks,
        }}
        >
        {props.children}
        </TaskContext.Provider>
    );
}
