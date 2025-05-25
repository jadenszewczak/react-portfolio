function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download className="download-link">
        Download My Resume
      </a>

      <div className="proficiencies">
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3 / Responsive Design</li>
          <li>JavaScript ES6+</li>
          <li>React</li>
          <li>Bootstrap / Tailwind</li>
        </ul>

        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL (PostgreSQL)</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
