import React from 'react';

const Skill = ({ name, bar, skill }) => {
    return (
        <div className="bar">
            <div className="info">
                <span>{name}</span>
            </div>
            <div className={`progress-line ${bar}`}>
                <span style={{ width: `${skill}%` }}></span>
            </div>
        </div>
    );
};

export default Skill;
