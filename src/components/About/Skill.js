import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skill = ({ title, skill }) => {
    return (
        <div className="skill mb-3">
            <h6>{title}</h6>
            <div className="skill-bar">
                <span>{skill}%</span>
                <ProgressBar animated className="skill-bar-in" now={skill} />
            </div>
        </div>
    );
};

export default Skill;
