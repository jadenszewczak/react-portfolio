import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/jadenszewczak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaden-szewczak-713b20331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/30633292/jaden-szewczak?tab=topactivity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
