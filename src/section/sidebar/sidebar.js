import { Images, Navbar } from "../../components";

const Sidebar = ({ className, image, Navbardata = [], imgWrapper}) => <div className={`${className}`}>
    <div>
        <Images image={image} imgWrapper={imgWrapper}/>
        <Navbar Navbardata={Navbardata} />
    </div>
</div>
export default Sidebar