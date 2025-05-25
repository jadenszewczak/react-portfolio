import Project from "../components/Project";
// Remove all image imports

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      image: "https://via.placeholder.com/400x300?text=Weather+Dashboard",
      deployedLink: "https://your-weather-app.netlify.app",
      githubLink: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "Password Generator",
      image: "https://via.placeholder.com/400x300?text=Password+Generator",
      deployedLink: "https://your-password-gen.netlify.app",
      githubLink: "https://github.com/yourusername/password-generator",
    },
    {
      title: "Code Quiz",
      image: "https://via.placeholder.com/400x300?text=Code+Quiz",
      deployedLink: "https://your-quiz.netlify.app",
      githubLink: "https://github.com/yourusername/code-quiz",
    },
    {
      title: "Day Planner",
      image: "https://via.placeholder.com/400x300?text=Day+Planner",
      deployedLink: "https://your-planner.netlify.app",
      githubLink: "https://github.com/yourusername/day-planner",
    },
    {
      title: "Employee Tracker",
      image: "https://via.placeholder.com/400x300?text=Employee+Tracker",
      deployedLink: "https://github.com/yourusername/employee-tracker",
      githubLink: "https://github.com/yourusername/employee-tracker",
    },
    {
      title: "Note Taker",
      image: "https://via.placeholder.com/400x300?text=Note+Taker",
      deployedLink: "https://your-notes.netlify.app",
      githubLink: "https://github.com/yourusername/note-taker",
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
