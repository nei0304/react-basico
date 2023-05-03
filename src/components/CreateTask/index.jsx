import { useState } from "react";
import { Button } from "../Button";
import styles from "./CreateTask.module.css";
import { useAppContext } from "../../hooks/useAppContext";
import { api } from "../../services/api";


export function CreateTask(){
    const [taskName, setTaskName] =useState("");
    const {tasks, addTask} = useAppContext();
    
    
     const handleSubmit = async (e)=>{
        e.preventDefault();
       
        const task = {
            //id: (tasks.length + 1),
            name: taskName
        };

        const {data: newTask} = await api.post("/tasks", task) ;

        addTask(task);
        console.log(task);
        setTaskName("");
    }
    

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value = {taskName}
                       onChange={(e)=> setTaskName(e.target.value)} />
                <Button type="submit" caption = "+"/>
            </form>
        </div>
    );
    
}