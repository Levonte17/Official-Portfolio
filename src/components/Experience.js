import website  from '../assets/website.mp4';
import second from '../assets/second.jpeg';
import react from 'react';
function Experience(props) {
    return(
        <div className="image">
            
            <h1>
                <img src={second} />
            </h1>
            <h1>
                <video src={website} alt="about" autoPlay loop muted />
            </h1>
        </div>
            
    );
}

export default Experience;