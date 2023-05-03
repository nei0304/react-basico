import { useEffect } from "react";
import { createContext,  useState } from "react";
import { api } from "../services/api";

export const AppContext  = createContext({});

export function AppContextProvider({children}){
    const [tasks, setTaskes]=useState([]);
    const [loading, setLoadig] = useState(true);


    const addTask=(task)=>{
        setTaskes((prev)=> [...prev,task]);
    }

    const removeTask=(id)=>{
       setTaskes((prev)=> prev.filter(task => task.id !== id));

    }
    
    useEffect(()=>{
        
        api.get("/tasks").then(resp => setTaskes(resp.data))
        setLoadig(false);
    },[])

    return (
        <AppContext.Provider value={{loading,tasks,addTask,removeTask}}>
            {children}
        </AppContext.Provider>
    );
}

// export function useAppContext(){
//     return useContext(AppContext);
// }