import React from 'react';
import './TrackCard.css'; // Assuming you have relevant styles for this component

const TrackCard = ({ trackName, lessonCount, phaseCount, description }) => {
    return (
        <div className='track-card'>
            <h2>{trackName}</h2>
            <p>Lessons: {lessonCount}</p>
            <p>Phases: {phaseCount}</p>
            <p>{description}</p>
            <a href='#' className='start-learning'>Start Learning</a>
        </div>
    );
};

export default TrackCard;