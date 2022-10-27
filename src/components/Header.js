//import img from '../assets/'
import{Link} from 'react-router-dom';
import{ bgvid1 } from '..assets/bgvid1.mp4';
function Header(props) {
    
    return (
<div className="header">

        <video> src={bgvid1} autoplay loop muted </video>


            <h1> 
                Digital Investors Hub 
            

            <h2> 
                Your #1 Source For Entrepreneurs 
                     And Start Up Businesses
            </h2> 
            </h1>
    <div className='header2'>

        <button>
            <Link to='Website'>
            <div>Create A Website</div>
            </Link>
        </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>
            <Link to='Deals'>
                <div> Start A Business</div>
            </Link>
        </button>
            <br/><br/>
            <br/><br/>
        <button>
            <Link to='Marketing'>
                <div> Business Essentials</div>
            </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>
            <Link to='Blogs'>
                <div>Here To Network</div>
            </Link>
        </button>
            <br/> <br/>
            <br/><br/>
            <br/><br/>
            </div>
</div>
    )
};

export default Header;