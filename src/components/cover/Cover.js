import React from 'react';//rafce
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = ({nombre}) => {
    return (
        <div className="cover__container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>{nombre}</h1>
            <p>Full-stack developer</p>
            
        </div>
    )
}

export default Cover
