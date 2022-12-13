import { Link } from 'react-router-dom'
import blogm from '../assets/blogm.png'
import ga from '../assets/ga.png'
import cyber from '../assets/cyber.png'
import mern from '../assets/mern.png'
import neg from '../assets/neg.png'


function Blogs(props) {

    return(
        <div className="blogs">
        <h1>BLOGS</h1>
    <div className="allcont">
        <Link to="/modules">            
            <img className="imgm" 
                src={blogm} 
                alt="module" 
                />
        </Link>
            
        <Link to="/ga">
            
                
            <img className="imgm" 
                src={ga} 
                alt="module" 
            />
        </Link>
        <Link to="/ga">
            <img className="imgm" 
                src={cyber} 
                alt="module" 
            />
        </Link>
        <Link to="/ga">
            <img className="imgm" 
                src={mern} 
                alt="module" 
            />
        </Link>
        <Link to="/ga">
            <img className="imgm" 
                src={neg} 
                alt="module" 
            />
        </Link>
    </div>

    
        </div>
        )
};

export default Blogs