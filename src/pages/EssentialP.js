import bs from '../assets/bs.jpeg';

function EssentialP(props) {

    return(
<div className="corp">
<h1> 
    Grow Your Business  
</h1>

    <div className='corpp'>
        <h2 className='left'>
            Business Cards
            <img src={bs} alt='bs' />
        </h2>

        <h2 className='right'>
            Business Workspace
        <br/><br/>
<p>
                        EMAIL:
                    <br/>
                    YourName@YourBrand.com
</p>
<br/>
<br/>
<p>
                        CREATE A TEAM:
                    <br/>
                    Team email names for employees
</p>
<br/>
<br/>
<p>
                        CONFERENCE CALLS:
                    <br/>
                    Host virtual meetings
<p>

<br/>
</p>
                        ANALYTICS:
                    <br/>
                    Keep up with company standings 
    </p>
    <br/>
    <br/>    </h2>
        <br/>
    </div>

    <div className='corppp'>
        <h2>

            <button>
                Subscribe
            </button>
        <br/><br/>
                <p className='subcribe'>
                  <h2>

                    NEWS FEED ACCESS
                  </h2>
                    Advertise & Promote your business
                    <br/>
                    Create your own post
                </p>

            <br/>
            <br/>

                <p>
                  <h2>

                    GRAPHIC DESIGNS
                  </h2>
                    Engage more potential clients
                    <br/>
                    Build your brand image
                </p>
            <br/>
            <br/>

                <p>
                  <h2>

                    BUSINESS CARDS
                  </h2>
                    Become more convienent for clients
                    <br/>
                    Easy Accessable QR Codes 
                </p>

            
        </h2>
    </div>
</div>
    )
};

export default EssentialP;