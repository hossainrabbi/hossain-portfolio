import React from 'react';
import ProjectLink from './ProjectLink';

const ProjectDetail = ({
    title,
    desc,
    useTechnology,
    sourceCode,
    liveSite,
}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div>
                {useTechnology.map((technology, index) => (
                    <span className="technology" key={index}>
                        {technology}
                    </span>
                ))}
            </div>
            <ProjectLink sourceCode={sourceCode} liveSite={liveSite} />
        </>
    );
};

export default ProjectDetail;
