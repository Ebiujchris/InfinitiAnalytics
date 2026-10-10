import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import DashboardPreview from "./components/dashboard-preview";
import { ProjectCard } from "./components/content-cards";
import { projects, services } from "./site-data";

export const metadata = { title: "Infiniti Analytics | Technology, data & digital growth" };

export default function HomePage() {
  return (
    <main id="home">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> TECHNOLOGY THAT MOVES YOU FORWARD</p>
            <h1 id="hero-title">Make technology<br />work <span>smarter.</span></h1>
            <p className="hero-description">We build practical digital systems and turn complex data into clear direction, so your organization can move forward with confidence.</p>
            <div className="hero-actions"><Link className="button button-lime" href="/contact">Talk through a project <ArrowUpRight size={16} /></Link><Link className="button button-text" href="/services">See what we do <ArrowRight size={15} /></Link></div>
            <div className="hero-capabilities"><span><Check size={14} /> Built around your goals</span><span><Check size={14} /> Clear from day one</span></div>
          </div>
          <DashboardPreview />
        </div>
        <div className="hero-bottom"><div className="wrap"><span>SOFTWARE</span><i /><span>ANALYTICS</span><i /><span>DIGITAL STRATEGY</span><i /><span>BUILT FOR YOUR BUSINESS</span><Link href="/services" aria-label="Explore our services"><ArrowDown size={16} /></Link></div></div>
      </section>

      <section className="home-services section-pad" aria-labelledby="home-services-title">
        <div className="wrap">
          <div className="home-section-heading"><div><p className="eyebrow eyebrow-dark">WHAT WE DO</p><h2 id="home-services-title">The right tools.<br /><span>The right direction.</span></h2></div><Link className="inline-link" href="/services">Explore all services <ArrowRight size={16} /></Link></div>
          <div className="home-service-grid">{services.map((service) => { const Icon = service.icon; return <Link className="home-service" href="/services" key={service.number}><span className="home-service-icon"><Icon size={19} /></span><span className="home-service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight className="home-service-arrow" size={17} /></Link>; })}</div>
        </div>
      </section>

      <section className="home-work section-pad" aria-labelledby="home-work-title">
        <div className="wrap">
          <div className="home-section-heading"><div><p className="eyebrow eyebrow-dark">SELECTED WORK</p><h2 id="home-work-title">Made for work<br />that <span>matters.</span></h2></div><Link className="inline-link" href="/work">See all our work <ArrowRight size={16} /></Link></div>
          <div className="projects-grid home-project-grid">{projects.slice(0, 2).map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </div>
      </section>

      <section className="home-approach"><div className="wrap home-approach-inner"><div><p className="eyebrow"><span className="eyebrow-mark" /> A PRACTICAL PARTNER</p><h2>Clear thinking.<br /><span>Useful outcomes.</span></h2></div><div><p>We listen first, design around real needs, and stay alongside you as the solution takes shape.</p><Link className="button button-lime" href="/about#approach">How we work <ArrowUpRight size={16} /></Link></div></div></section>

      <section className="home-contact"><div className="wrap"><p>Have a challenge worth solving?</p><Link href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></Link></div></section>
    </main>
  );
}
