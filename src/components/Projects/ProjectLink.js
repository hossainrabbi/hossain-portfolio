import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectLink = ({ sourceCode, liveSite }) => {
    return (
        <div className="project-link mt-3">
            <a
                href={sourceCode}
                target="_blank"
                rel="noreferrer"
                title="Source Code"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href={liveSite}
                target="_blank"
                rel="noreferrer"
                title="Live Site"
            >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </div>
    );
};

export default ProjectLink;
