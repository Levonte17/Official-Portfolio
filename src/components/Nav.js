import{Link} from 'react-router-dom';
function Nav(props) {

    return (
        
        <nav className="nav"> 
        <br/>           

<Link to='home'>
            <div>Home</div>
            </Link>

            <Link to='Sports' >
            <div>Sports</div>
            </Link>

            <Link to='Website'>
            <div>Websites</div>
            </Link>

            <Link to='Blogs'>
                <div>Blogs</div>
            </Link>

            <Link to='Resume'>
                <div>Portfolio</div>
            </Link>

            <Link to='Marketing'>
                <div>Marketing</div>
            </Link>

            <Link to='Deals'>
                <div>Packages</div>
            </Link>
            <br/><br/>           


        </nav>
    );
}


export default Nav;