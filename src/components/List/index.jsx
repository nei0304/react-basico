import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import styles from "./List.module.css";
import { ItemList } from "./components";



export function List(){
    const {tasks,loading} = useAppContext();
      
    return (
    
        <ul className={styles.container}>
            {loading && <div>Carregando...</div>}
            {tasks.map((task)=>
                <ItemList key={task.id} 
                          name ={task.name} 
                          id= {task.id} />
            )}
            
        </ul>
    );
}