import content from '../assets/content.mp4';
import contentt from '../assets/contentt.mp4';
import React from 'react';

function Content(props) {
    return(
        <div className="image">
            
            <h1>
                <video src={content} alt="content" autoPlay loop muted />
            </h1>
            <h1>
                <video src={contentt} alt="content" autoPlay loop muted />
            </h1>      
</div>

    );
}

export default Content;