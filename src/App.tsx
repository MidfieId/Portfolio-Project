import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getProject } from "./data/projects";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectSlug = pathname.split("/")[2];
    const project = projectSlug ? getProject(projectSlug) : undefined;
    const pageTitle = pathname === "/" ? "Software Engineer" : project ? project.title : pathname === "/projects" ? "Projects" : "Page not found";
    document.title = `Elmustafa Eltayeb | ${pageTitle}`;
  }, [pathname]);

  return <div className="site-shell">
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Elmustafa's portfolio home">
        <span className="prompt">&gt;_</span> elmustafa.dev
      </NavLink>
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>

    <main><Outlet /></main>

    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Elmustafa. Built with care.</p>
      <div className="social-links" aria-label="Social links">
        <a href="https://github.com/MidfieId" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/elmustafa-ahmed-62b24222a" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:elmustafa.eltayeb@gmail.com">Email</a>
      </div>
    </footer>
  </div>;
};

export default App;
