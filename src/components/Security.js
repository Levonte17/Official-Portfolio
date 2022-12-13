import security from '../assets/security.gif';

function Features(props) {

    return(
<div className="corp">
<h1> 
    WEB SECURITY  
</h1>

    <div className='corpp'>
        <h2 className='left'>
             
            <img src={security} alt='bs' />
        </h2>

        <h2 className='right'>
            ALL WEBSITES GUARANTEE SECURITY 
<p>         
    <strong>
    Confidentiality:
    </strong>
<br/>
    Special Features For Logged In Users
<br/>
    Your Information Is always Private
<br/>
<br/>
    <strong>
    Integrity: 
    </strong>
<br/>
    Only You Can Delete Your Data
<br/>
    Messaging Limited To Logged In Users
<br/>
    Admininstation Only Controllers
<br/>
<br/>
    <strong>
    Availability: 
    </strong>
<br/>
    24/7 Access To Your Data Information
<br/>
    Secondary Emails And Passwords 
<br/>
    MultiFacter Authentication Google Login
<br/>
</p>
</h2>

</div>
</div>
    )
};

export default Features;