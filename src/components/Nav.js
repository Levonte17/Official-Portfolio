import{Link} from 'react-router-dom';

function Nav(props) {
    return (
        
        <nav className="nav"> 
        <br/>           

            <Link to='' className="nav">
                <div>HOME</div>
            </Link>

            <Link to='/Contact-us' className="nav">
            <div>CONTACT</div>
            </Link>

            <Link to='Websites' className="nav">
                <div>WEBSITES</div>
            </Link>

            <Link to='/corprate' className="nav">
                <div>CORPRATE</div>
            </Link>
            
            <Link to='/blogs' className="nav">
                <div>BLOGS</div>
            </Link>

            <Link to='/plus' className="nav">
                <div>PREMIUM</div>
            </Link>
            <br/><br/>           


        </nav>
    );
}


export default Nav;