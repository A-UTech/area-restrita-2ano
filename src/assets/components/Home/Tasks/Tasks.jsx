import { useState, useEffect } from 'react'
import './Tasks.css'
import lixeira from "../../../icons/ic_lixeira.svg"

const Tasks = () => {
    const [tasks, setTasks] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('tasks')) || []
        } catch {
            return []
        }
    })
    
    const [novaTask, setNovaTask] = useState("")
    const [tasksConcluidas, setTasksConcluidas] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('tasksConcluidas')) || []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('tasksConcluidas', JSON.stringify(tasksConcluidas))
    }, [tasks, tasksConcluidas])

    const adicionarTask = () => {
        if (novaTask.trim() === "") return
        setTasks(prev => [...prev, novaTask])
        setTasksConcluidas(prev => [...prev, false])
        setNovaTask("")
    }

    const removerTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index))
        setTasksConcluidas(prev => prev.filter((_, i) => i !== index))
    }

    const alternarTask = (index) => {
        setTasksConcluidas(prev => {
            const novas = [...prev]
            novas[index] = !novas[index]
            return novas
        })
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
                {tasks.map((tarefa, indice) => (
                    <li key={indice}>
                        <input 
                            type="checkbox"
                            checked={tasksConcluidas[indice] || false}
                            onChange={() => alternarTask(indice)}
                        />
                        <span style={{ textDecoration: tasksConcluidas[indice] ? 'line-through' : 'none' }}>
                            {tarefa}
                        </span>
                        <img src={lixeira} onClick={() => removerTask(indice)} alt="Remover tarefa" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks