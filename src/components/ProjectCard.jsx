import React from 'react';
import ReactMarkdown from 'react-markdown';

import '../styles/ProjectsPage.css';

const ProjectCard = ({ content }) =>
{
    return(
        <div className="projectCard">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export default ProjectCard;