import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className={project.sections ? "page case-page" : "page narrow"}>
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <img className="detail-image" src={project.image} alt="" />
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      {project.description && <p className="lead">{project.description}</p>}

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.sections?.map((section) => (
        <section
          className={section.image ? "case-section" : "case-section no-image"}
          key={section.heading}
        >
          <div>
            <h2>{section.heading}</h2>
            <p className="case-text">{section.text}</p>
          </div>
          {section.image && (
            <img
              src={section.image}
              alt=""
              style={
                section.imageBackground && {
                  background: section.imageBackground,
                  padding: "2rem",
                }
              }
            />
          )}
        </section>
      ))}

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectPage;
