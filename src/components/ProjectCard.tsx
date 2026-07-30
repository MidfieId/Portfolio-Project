import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card">
    <p className="eyebrow">PROJECT_ENTRY</p>
    <h3>{project.title}</h3>
    <p>{project.summary}</p>
    <div className="tech-list" aria-label="Technologies used">
      {project.technologies.map((technology) => (
        <span className="tech-badge" key={technology.name} title={technology.name}>
          <b aria-hidden="true">{technology.mark}</b>{technology.name}
        </span>
      ))}
    </div>
    <Link className="button-link" to={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link>
  </article>
);
