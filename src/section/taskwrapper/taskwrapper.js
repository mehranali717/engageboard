import { AddNewTask, FontAwsom, Task } from "../../components"
import useTask from "../../customhook/useTask";
const taskData = [
    { id: '1', taskMessage: "Send Boulevard Villas Pictures to Jamesl", time: "12:00 PM", date: "08 `Jan" },
    { id: '2', taskMessage: "Send Payment Structure to Martin", time: "2:00 PM", date: "17 `Jan" },
    { id: '3', taskMessage: "Find 3Bhk Apartment in JVC for Michael", time: "3:30 PM", date: "26 `Jan" },
    { id: '4', taskMessage: "Collect documents from Smith", time: "4:00 PM", date: "28 `Jan" },
    { id: '5', taskMessage: "Send Payment Structure to Martin", time: "2:00 PM", date: "17 `Jan" },
    { id: '6', taskMessage: "Find 3Bhk Apartment in JVC for Michael", time: "3:30 PM", date: "26 `Jan" },
    { id: '7', taskMessage: "Collect documents from Smith", time: "4:00 PM", date: "28 `Jan" },
]
const TaskWrapper = () => {
    const [tasks] = useTask([]);
    return <div>
        <div className="flex gap-x-[12px] items-center py-[8px]">
            <FontAwsom icons={[{ prefix: 'fas', iconName: 'list-check' }]} className="text-[##606465] text-[24px]" />
            <span className="text-[#606465] text-[18px] font-[500] leading-[1]">Task</span>
        </div>
        <Task taskData={tasks} />
        <AddNewTask />
    </div>
}
export default TaskWrapper