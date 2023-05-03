import { useAppContext } from "../../../hooks/useAppContext";
import { api } from "../../../services/api";
import { Button } from "../../Button";
import styles from "./ItemList.module.css";


export function ItemList({name, id}){
    const {removeTask}= useAppContext()
    const handleRemove= async()=>{
       
       if(confirm(`Tem certeza que deseja remover o item ${name}?`))  {
           await api.delete(`/tasks/${id}`) 
           removeTask(id);
       } 

    };

    return (
        <li className={styles.container}>
           <strong> {name} </strong> 
           <Button caption = "-" 
                   bg ="1"
                   action={handleRemove}
                   />
        </li>
    );
}