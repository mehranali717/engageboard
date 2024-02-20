import { useEffect, useState } from "react";

const useTask = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("task"))
        if (storedTasks) {
            setTasks(storedTasks)
        }
    }, [])
    const setAddRemoveTask = (task) => {
        const updatedData = [...tasks, task]
        localStorage.setItem("task", JSON.stringify(updatedData));
        setTasks(updatedData);
    }

    return [tasks, setAddRemoveTask];
}
export default useTask