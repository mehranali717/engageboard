import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../contextAPI/contextAPI";

const useTask = () => {
    const [tasks, setTasks] = useState([])
    const {text, setText} = useContext(ContextAPI)
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("task"))
        if (storedTasks) {
            setTasks(storedTasks)
        }
        setText("")
    }, [text])
    const setAddRemoveTask = (task) => {
        const updatedData = [...tasks, task]
        localStorage.setItem("task", JSON.stringify(updatedData));
        setTasks(updatedData);
    }

    return [tasks, setAddRemoveTask];
}
export default useTask