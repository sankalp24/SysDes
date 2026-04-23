import React from 'react';
import PropTypes from 'prop-types';
import './Callout.css'; // Assuming you will create a CSS file for styles

const Callout = ({ type, children }) => {
    const types = {
        sada: { color: '#f0f8ff', icon: '🛎️', label: 'Sada' },
        info: { color: '#d1ecf1', icon: 'ℹ️', label: 'Information' },
        warning: { color: '#ffeeba', icon: '⚠️', label: 'Warning' },
        danger: { color: '#f8d7da', icon: '❌', label: 'Danger' },
        keyConcept: { color: '#e2ffe2', icon: '💡', label: 'Key Concept' }
    };

    const { color, icon, label } = types[type] || types.info;

    return (
        <div className="callout" style={{ borderLeft: `4px solid ${color}`, background: color }}>
            <strong>{icon} {label}:</strong> {children}
        </div>
    );
};

Callout.propTypes = {
    type: PropTypes.oneOf(['sada', 'info', 'warning', 'danger', 'keyConcept']).isRequired,
    children: PropTypes.node.isRequired
};

export default Callout;
