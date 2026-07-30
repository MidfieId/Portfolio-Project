import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const ProjectsPage = () => (
  <section className="section-wrap projects-page">
    <p className="eyebrow">PROJECT_INDEX</p>
    <h1>Things I’ve built.</h1>
    <p className="body-copy">A collection of experiments, team efforts, and products. Each entry has a longer Markdown-based write-up.</p>
    <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
  </section>
);
