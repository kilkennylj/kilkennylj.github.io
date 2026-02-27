import '../styles/HomePage.css';

function About ()
{
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="aboutImgContainer">
                <img className="aboutImg" src="/images/liam.jpeg" alt='Liam Kilkenny, creator of this webpage' />
            </div>
            <div className="aboutContent">
                <p>
                    Hello, I am Liam Kilkenny, and this is my personal portfolio website.
                    I am in my senior year at UCF, majoring in Computer Science and Mathematics.
                    I plan on graduating in Spring 2026.
                </p>
                <p>
                    I took a particular interest in Artifical Intelligence and Machine Learning in my 2nd year, where I started to work with professors in the Artifical Intelligence Initive.
                    This interest has stuck with me and is the focus of my Honors Undergraduate Thesis project.
                </p>
                <p>
                    I enjoy working on projects and helping peers with computer-related problems in my free time.
                    I like to help others with their computer-related problems since many want to do modern projects, but they often require some knowledge of coding.
                    I like to act as a teacher so they can learn quickly and comfortably, showing results.
                </p>
            </div>
        </div>
    );
}

export default About;
