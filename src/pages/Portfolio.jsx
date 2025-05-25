import Project from "../components/Project";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

function Portfolio() {
  const projects = [
    {
      title: "Prework Study Guide",
      image: project1,
      deployedLink: "https://jadenszewczak.github.io/prework-study-guide",
      githubLink: "https://github.com/jadenszewczak/prework-study-guide",
    },
    {
      title: "README Generator",
      image: project2,
      deployedLink: "https://www.youtube.com/watch?v=avIumsvVhjw",
      githubLink: "https://github.com/jadenszewczak/readme-generator",
    },
    {
      title: "Vehicle Builder",
      image: project3,
      deployedLink: "https://www.youtube.com/watch?v=-ng2kkreCoQ",
      githubLink: "https://github.com/jadenszewczak/vehicle-builder",
    },
    {
      title: "Weather Dashboard",
      image: project4,
      deployedLink: "https://weather-dashboard-5bfd.onrender.com",
      githubLink: "https://github.com/jadenszewczak/weather-dashboard",
    },
    {
      title: "Employee Tracker",
      image: project5,
      deployedLink:
        "https://www.youtube.com/watch?v=I3z0aqMuSqY&ab_channel=ExcelWizard",
      githubLink: "https://github.com/jadenszewczak/employee-tracker",
    },
    {
      title: "React Portfolio",
      image: project6,
      githubLink: "https://github.com/jadenszewczak/react-portfolio",
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
