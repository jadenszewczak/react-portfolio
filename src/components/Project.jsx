function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-links">
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              {deployedLink === githubLink ? "Code" : "Demo"}
            </a>
          )}
          {githubLink && deployedLink !== githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
