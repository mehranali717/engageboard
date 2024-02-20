import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const Checkbox = ({id, sendCheckboxDataToTask}) => {
    const [markedTasks, setMarkedTasks] = useState()
    const handleCheckboxChange =(id)=> {
        setMarkedTasks(id);
    }
    useEffect (()=>{
        sendCheckboxDataToTask(markedTasks)
    },[markedTasks])
    return <React.Fragment>
    {[id].map((type, index) => (<Form.Check
        type="checkbox"
        id={`${type}`}
        onChange={(e) => handleCheckboxChange(e.target.id)}
        key={index}
    />))}
</React.Fragment>
}
export default Checkbox