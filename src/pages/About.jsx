import avatarImage from "../assets/images/avatar.jpeg";
function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={avatarImage} alt="Jaden Szewczak" className="avatar" />
        <div className="bio">
          <p>
            Hello! I'm a full-stack web developer with a passion for creating
            innovative and user-friendly applications. Currently enrolled in the
            Columbia Coding Bootcamp, I'm building expertise in modern web
            technologies.
          </p>
          <p>
            My journey in web development started with a background in warehouse
            management systems and logistics analytics, where I built automation
            tools and data-driven workflows using Excel VBA and SQL. That
            hands-on experience with real-world operations inspired me to pursue
            software development more deeply.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
