import { Link } from "react-router";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

function ProjectsPage() {
  useReveal(".project-card");

  return (
    <div className="page">
      <section className="section intro">
        <p className="eyebrow">Projekter</p>
        <h1>Mine projekter</h1>
        <p>
          Et udvalg af de projekter jeg har arbejdet på gennem mit studie,
          fra design i Figma til færdige webapps i React.
        </p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <img src={project.image} alt={`Preview af ${project.title}`} />
            <div className="project-card-content">
              <p className="eyebrow">{project.year}</p>
              <h2>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
