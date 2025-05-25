import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/yourid"
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
