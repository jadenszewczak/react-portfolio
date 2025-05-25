function Resume() {
  const frontEndSkills = [
    "HTML5",
    "CSS3 / Responsive Design",
    "JavaScript ES6+",
    "React.js",
    "Bootstrap",
    "jQuery",
    "Responsive Web Design",
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "SQL (PostgreSQL)",
    "MongoDB (In Progress)",
    "RESTful APIs",
    "TypeScript",
    "Object-Oriented Programming",
  ];

  const tools = [
    "Git/GitHub",
    "VS Code",
    "npm/Yarn",
    "Vite/Webpack",
    "Command Line",
    "Render/Netlify",
    "Chrome DevTools",
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <a href="/resume.html" target="_blank" className="download-link">
          View Full Resume
        </a>
        <p style={{ marginTop: "1rem", color: "#666" }}>
          Email: jaden.szewczak@wakefern.com | LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/jaden-szewczak-713b20331">
            jadenszewczak
          </a>
        </p>
      </div>

      <div className="proficiencies">
        <div>
          <h3>Front-End Proficiencies</h3>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Back-End Proficiencies</h3>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Tools & Technologies</h3>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
