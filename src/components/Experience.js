import bgvid1  from '../assets/website.mp4';
import one from '../assets/second.jpeg';

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