import meet  from '../assets/meet.mp4';
import third from '../assets/third.jpeg';
import react from 'react';
function Contact(props) {
    return(
        <div className="image">
            
            <h1>
                <img src={third} />
            </h1>
            <h1>
                <video src={meet} alt="about" autoPlay loop muted />
            </h1>
        </div>
            
    );
}

export default Contact;