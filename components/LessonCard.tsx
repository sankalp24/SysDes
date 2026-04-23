import React from 'react';
import './LessonCard.css';  // Assuming you have a CSS file for styles

const LessonCard = ({ trackColor, phaseBadge, trackBadge, title, excerpt, readTime }) => {
    return (
        <div className="lesson-card" style={{ borderTop: `5px solid ${trackColor}` }}>
            <div className="badges">
                <span className="phase-badge">{phaseBadge}</span>
                <span className="track-badge">{trackBadge}</span>
            </div>
            <h3 className="title">{title}</h3>
            <p className="excerpt">{excerpt}</p>
            <p className="read-time">Read Time: {readTime}</p>
        </div>
    );
};

export default LessonCard;