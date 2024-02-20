import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FontAwsom = (props) =>  {
    return <>
    {props.icons.map((item, index) => <Link to={item.url} key={index} ><FontAwesomeIcon {...props} icon={[item.prefix, item.iconName]} className={`${props.className}`} /></Link>)}
</>
}
export default FontAwsom