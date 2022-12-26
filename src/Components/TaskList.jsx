import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskList() {    
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            <h3>NO HAY TAREAS CREADAS</h3>
        )
    }

    return (
        <div className='grid grid-cols-3 gap-6'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />        
            ))}
        </div>
    );
}

export default TaskList;
