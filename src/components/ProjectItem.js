import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesSpan = technologies.map((technology) => <span technologies={technology.technologies}></span>);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{/* render a <span> for each technology in the technologies array */}</div>
    </div>
  );
}

export default ProjectItem;
