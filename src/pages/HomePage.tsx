import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const skillGroups = [
  ["Languages", ["JavaScript", "TypeScript", "C#", "SQL"]],
  ["Frontend", ["React", "Blazor", "Tailwind CSS", "HTML & CSS"]],
  ["Backend / APIs", ["ASP.NET Core", ".NET MVC", "REST APIs", "Entity Framework Core"]],
  ["Tools & platforms", ["Git & GitHub", "Azure DevOps", "Jira", "Figma"]],
];

export const HomePage = () => (
  <>
    <section className="hero section-wrap">
      <p className="eyebrow">HELLO_WORLD</p>
      <h1>Software Engineer<br /><span>&amp; aspiring data analyst.</span></h1>
      <p className="hero-copy">Full-stack developer focused on maintainable web applications, reliable business systems, and thoughtful user experiences.</p>
      <div className="hero-actions"><Link className="button-link" to="/projects">Browse projects <span aria-hidden="true">→</span></Link><a className="text-link" href="#contact">Get in touch</a></div>
    </section>

    <section className="section-wrap split-section" id="about">
      <div><p className="eyebrow">01 / ABOUT</p><h2>A little about me.</h2></div>
      <p className="body-copy">I’m a software developer based in Al Ain, UAE, with experience developing responsive applications, backend services, and SQL-backed systems. I enjoy clear problem-solving, maintainable code, and delivering practical software that people can rely on.</p>
    </section>

    <section className="section-wrap" id="skills">
      <p className="eyebrow">02 / SKILLS</p><h2>Tools I work with.</h2>
      <div className="skills-grid">{skillGroups.map(([group, skills]) => <div className="skill-group" key={group as string}><h3>{group}</h3><ul>{(skills as string[]).map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
    </section>

    <section className="section-wrap experience-section" id="experience">
      <p className="eyebrow">03 / EXPERIENCE</p><h2>Working with a team.</h2>
      <div className="experience-entry"><div><p className="experience-date">FEB 2024 — SEP 2024</p><h3>Ldevs Team</h3></div><div><p className="experience-role">Frontend Developer · Chatting Web Application</p><p className="body-copy">Built responsive Blazor interfaces for a real-time chat application, collaborating in an Agile team through weekly stand-ups, Trello task management, and Miro ideation. Helped create smooth client-server interactions and dynamic UI features.</p></div></div>
    </section>

    <section className="section-wrap" id="featured-projects">
      <div className="section-heading"><div><p className="eyebrow">04 / FEATURED WORK</p><h2>Selected projects.</h2></div><Link className="text-link" to="/projects">All projects →</Link></div>
      <div className="project-grid">{projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>

    <section className="section-wrap contact-section" id="contact">
      <p className="eyebrow">05 / CONTACT</p><h2>Let’s make something useful.</h2>
      <p className="body-copy">A contact form will live here soon. Until then, email is the best way to reach me.</p>
      <a className="button-link" href="mailto:elmustafa.eltayeb@gmail.com">Send an email <span aria-hidden="true">↗</span></a>
    </section>
  </>
);
