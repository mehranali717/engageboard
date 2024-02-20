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
        localStorage.setItem("task", JSON.stringify(task));
        const storedTasks = JSON.parse(localStorage.getItem("task"))
        setTasks(storedTasks);
    }

    return [tasks, setAddRemoveTask];
}
export default useTask