import React, {useState} from 'react'
import './Task.module.css'

function ToDo(){

    const[tasks, setTasks] = useState(["Meditate", "Run errands", "Exercise"])
    const [newTask, setNewTask] = useState("") 

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function insertTask() {

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    function removeTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function shiftTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function shiftTaskDown(index) {
        if(index < tasks.length){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
    
    <div className="to-do-list">

        <h1>To Do List</h1>

        <input 
        
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={handleInputChange}/>

        <button
            className="insert-button"
            onClick={insertTask}>
            Insert Task 
        </button>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                
                    <button className="remove-task"
                            onClick={() => removeTask(index)}>
                            X
                    </button>
                    <button className="shift-task"
                            onClick={() => shiftTaskUp(index)}>
                            ↑
                    </button>
                    <button className="shift-task"
                            onClick={() => shiftTaskDown(index)}>
                            ↓
                    </button>

                </li>)}
        </ol>

    </div>)
}

export default ToDo