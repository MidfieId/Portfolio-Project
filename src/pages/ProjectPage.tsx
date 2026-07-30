import { Link, useParams } from "react-router-dom";
import { MarkdownContent } from "../components/MarkdownContent";
import { getProject } from "../data/projects";

export const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <section className="section-wrap empty-state"><p className="eyebrow">404</p><h1>Project not found.</h1><Link className="button-link" to="/projects">Back to projects</Link></section>;

  return <section className="section-wrap project-detail">
    <Link className="back-link" to="/projects">← All projects</Link>
    <div className="project-intro"><div><p className="eyebrow">PROJECT_FILE / {project.slug.toUpperCase()}</p><h1>{project.title}</h1><p className="project-summary">{project.summary}</p></div><aside><h2>Stack</h2><div className="tech-list">{project.technologies.map((technology) => <span className="tech-badge" key={technology.name}><b>{technology.mark}</b>{technology.name}</span>)}</div><h2>Links</h2><div className="project-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Source code ↗</a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View app ↗</a>}</div></aside></div>
    <MarkdownContent content={project.content} />
  </section>;
};
