import { Link } from "react-router-dom"

const Button = ({ className, btnData }) => {
    return <>
        {
            Array.isArray(btnData) ? btnData.map((item, index) => <Link to={item.url} className={`${className}`} key={index}>
                {item.text}
            </Link>
            ) : <button className={`${className}`} >{btnData}</button>}
    </>
}
export default Button