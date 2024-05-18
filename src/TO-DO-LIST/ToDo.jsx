import React, {useState} from 'react'

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
    
    <div className={styles["to-do-list"]}>

        <h1>To Do List</h1>

        <input className={styles["input-container"]}
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={handleInputChange}/>

        <button
            className={styles['insert-button']}
            onClick={insertTask}>
            Insert 
        </button>

        <ol>
            {tasks.map((task, index) => 
                <li key={index} className={styles.listItem}>
                    <span className={styles.text}>{task}</span>
                
                    <button className={styles["remove-task"]}
                            onClick={() => removeTask(index)}>
                            X
                    </button>
                    <button className={styles['shift-task']}
                            onClick={() => shiftTaskUp(index)}>
                            ↑
                    </button>
                    <button className={styles['shift-task']}
                            onClick={() => shiftTaskDown(index)}>
                            ↓
                    </button>

                </li>)}
        </ol>

    </div>)
}

export default ToDo