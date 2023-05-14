import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
    return(
<div className="why">


<p> 
    We offer 24/7 business consultant/ coaching services to help companies reach their goals.
    We specialize in developing strategies to increase efficiency, reduce costs, and maximize profits. 
    We also have a proven track record of success and am confident I can help your business reach its goals.
  
    <br/> 
    <br/> 
    <br/> 
    <b>CLICK ANY LINK TO GET STARTED</b>
</p>
<div className="cred">
<Link to='Portfolio'className='link'>
    <h2> 
        Portfolio
    </h2>
</Link>
<Link to='About'className='link'>
    <h2> 
        About Us
    </h2>
</Link>
<Link to='Staff' className='link'>
    <h2> 
        Our Staff
    </h2>
</Link>
</div>
</div>


        
    )
};

export default Links;