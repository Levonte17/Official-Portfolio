import{Link} from 'react-router-dom';


function Dashboard(props) {
    return(
        

    <div className='header2'>
        <button className='dash'>
            <Link to='Website'>
            <p>Create a Website</p>
            </Link>
        </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='dash'>
            <Link to='Deals'>
                <p> Start a Business</p>
            </Link>
        </button>
            <br/><br/>

        <button className='dash'>
            <Link to='Marketing'>
                <p> Business Growth</p>
            </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='dash'> 
            <Link to='Blogs'>
                <p>Here To Learn</p>
            </Link>
        </button>
        <div className='header3'>
        <br/><br/>
        </div>
        </div>
    )
};

export default Dashboard;