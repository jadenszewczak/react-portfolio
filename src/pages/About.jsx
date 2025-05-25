// Remove the import line at the top
// import avatarImage from "../assets/images/avatar.jpg";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="https://via.placeholder.com/200"
          alt="Your Name"
          className="avatar"
        />
        <div className="bio">
          <p>
            Hello! I'm a full-stack web developer with a passion for creating
            innovative and user-friendly applications. Currently enrolled in the
            Columbia Coding Bootcamp, I'm building expertise in modern web
            technologies.
          </p>
          <p>
            My journey in web development started with [your background]. I
            enjoy solving complex problems and turning ideas into reality
            through code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
