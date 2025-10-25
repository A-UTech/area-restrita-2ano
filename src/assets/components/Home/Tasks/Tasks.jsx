import { useState } from 'react'
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [novaTask, setNovaTask] = useState("")

    const adicionarTask = () => {
        if (novaTask.trim() === "") return
        setTasks([...tasks, novaTask])
        setNovaTask("")
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }

    return (
        <div className="tasks-container">
            <h5>Lista de tarefas</h5>
            <input 
                type="text"
                placeholder="Cadastrar nova tarefa"
                value={novaTask}
                onChange={(e) => setNovaTask(e.target.value)} />
            <button onClick={adicionarTask}>Adicionar</button>

            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span> 
                        <button onClick={() => removeTask(index)}>✖</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks