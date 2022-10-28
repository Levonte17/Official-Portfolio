
import bgvid1  from '../assets/bgvid1.mp4';
function Header(props) {
    
    return (
<div className="main">
        <video src={bgvid1} autoPlay loop muted />
    </div>
    )
};

export default Header;