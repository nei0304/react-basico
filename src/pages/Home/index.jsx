import styles from "./Home.module.css";
import { CreateTask } from "../../components/CreateTask";
import { List } from "../../components/List";
import { useState } from "react";


export function Home() {
    
    return (
        <>
           <CreateTask />         
           <List />
        </>

    );

}