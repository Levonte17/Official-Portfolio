import React from 'react'
import web from '../assets/web.png';

function Create(props) {
  return (
    <div className='web' >
      <h1>
        Create A Website
      </h1>
    <img 
        className="webimg" 
        src={web} 
        alt="web"
    />
  <p className='pt'>
    - All websites are built with SEO in mind to maximize 
    search visibility and attract new customers.
<br/>
<br/>
    - Our Multi Servers and Multi-cloud hosting ensures 99.9% uptime 
    to suport more web traffic and growth of your business
    even after server failures.
<br/>
<br/>

    - Custom graphic designs to engage your users and 
    enhance trust from potential customers.
<br/>
<br/>

    - Custom domain names and hosting is included with each 
    website.
  </p>      
<hr className='hr1'/>
    </div>
  )
}

export default Create;
