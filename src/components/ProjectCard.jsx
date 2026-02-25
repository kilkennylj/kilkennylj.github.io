import DOMPurify from 'isomorphic-dompurify';
import '../styles/ProjectsPage.css';

const ProjectCard = ({ content }) => {
    const cleanHtml = DOMPurify.sanitize(content);

    return (
        <div className="projectCard" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    );
}

export default ProjectCard;