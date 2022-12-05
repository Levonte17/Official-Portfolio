import{Link} from 'react-router-dom';
function Nav(props) {

    return (
        
        <nav className="nav"> 
        <br/>           

            <Link to=''>
                <div>HOME</div>
            </Link>

            <Link to='/Contact-us' >
            <div>CONTACT</div>
            </Link>

            <Link to='Websites'>
                <div>WEBSITES</div>
            </Link>

            <Link to='/corprate'>
                <div>CORPRATE</div>
            </Link>
            
            <Link to='/blogs'>
                <div>BLOGS</div>
            </Link>

            <Link to='/plus'>
                <div>PREMIUM</div>
            </Link>
            <br/><br/>           


        </nav>
    );
}


export default Nav;