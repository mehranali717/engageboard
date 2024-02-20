import { Link } from "react-router-dom"

const Button = (props) => {
    return <>
        {
            Array.isArray(props.btnData) ? props.btnData.map((item, index) => <Link to={item.url} className={`${props.className}`} key={index}>
                {item.text}
            </Link>
            ) : <button
            {...props}
            className={`${props.className}`} >{props.btnData}</button>}
    </>
}
export default Button