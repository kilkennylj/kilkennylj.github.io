import React from 'react';

import '../styles/ProjectsPage.css';

const ProjectCard = ({ content }) =>
{
    return(
        <div className="projectCard">
            {content}
        </div>
    );
}

export default ProjectCard;