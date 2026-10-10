import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "../components/content-cards";
import { projects } from "../site-data";

export const metadata = { title: "Our Work | Infiniti Analytics" };

export default function WorkPage() {
  return (
    <main className="route-page">
      <section className="route-hero"><div className="wrap route-hero-inner"><p className="eyebrow eyebrow-dark">SELECTED WORK</p><h1>Made for the work<br />that <span>matters.</span></h1><p>A selection of digital experiences created for organizations serving their communities, strengthening their work, and looking ahead.</p></div></section>
      <section className="route-section section-pad"><div className="wrap"><div className="work-page-heading"><div><p className="eyebrow eyebrow-dark">A FEW RECENT PARTNERSHIPS</p><h2>Different missions.<br /><span>Thoughtful digital work.</span></h2></div><p>Explore the live projects to see how each organization presents its work online.</p></div><div className="projects-grid projects-page-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></div></section>
      <section className="work-contact-strip"><div className="wrap"><p>Have a project in mind?</p><a href="/contact">Let&apos;s talk about it <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
