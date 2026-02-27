import "../styles/Footer.css"

const Footer = () =>
{
    return(
        <div className="footerContainer">
            <div className="contactInfo">
                <ul>
                    <li><img src="/images/githubLogo.png" alt='GitHub' loading="lazy" /> <a href='https://github.com/kilkennylj/'>kilkennylj</a></li>
                    <li><img src="/images/linkedInLogo.png" alt='LinkedIn' loading="lazy" /><a href='https://www.linkedin.com/in/kilkennylj/'>kilkennylj</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;