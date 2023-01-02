import{Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Nav(props) {
    return (
        
        <nav className="nav"> 
        <br/>           

            <Link to="/">
                <div className='nav-logo'>
                    <FaHome />
                </div>
            </Link>

            <Link to='Websites' className="nav1">
                <div>WEBSITES</div>
            </Link>
            
            <Link to='/blogs' className="nav1">
                <div>STORIES</div>
            </Link>

            <Link to='/essentials' className="nav1">
                <div>BUSINESS</div>
            </Link>
            
            
            <Link to='/blogs' className="nav1">
                <div>LEARN</div>
            </Link>

            <br/><br/>           


        </nav>
    );
}


export default Nav;