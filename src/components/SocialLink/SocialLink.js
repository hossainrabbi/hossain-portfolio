import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLink.css';

const SocialLink = ({ link, icon }) => {
    return (
        <li>
            <a href={link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} />
            </a>
        </li>
    );
};

export default SocialLink;
