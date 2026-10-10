import { ArrowUpRight } from "lucide-react";
import { Globe2 } from "lucide-react";

export function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="service-row">
      <span className="service-number">{service.number}</span>
      <span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span>
      <div className="service-copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <ArrowUpRight className="service-arrow" size={19} aria-hidden="true" />
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <a className="project-visual" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.client}`}>
        <span className="project-visual-top"><span>{project.mark}</span><span>SELECTED WORK / {project.number}</span></span>
        <span className="project-visual-main"><Globe2 size={37} strokeWidth={1.2} /><span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" /></span>
        <span className="project-visual-bottom">DIGITAL EXPERIENCE <ArrowUpRight size={15} /></span>
      </a>
      <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
      <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
      <p>{project.detail}</p>
      <a className="project-client" href={project.href} target="_blank" rel="noopener noreferrer">
        {project.client}<ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
