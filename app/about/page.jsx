import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { steps } from "../site-data";

export const metadata = { title: "About | Infiniti Analytics" };

export default function AboutPage() {
  return (
    <main className="route-page">
      <section className="route-hero"><div className="wrap route-hero-inner"><p className="eyebrow eyebrow-dark">ABOUT INFINITI ANALYTICS</p><h1>Small enough to listen.<br /><span>Ready to deliver.</span></h1><p>We are technologists and business strategists helping organizations make more of their technology and data, with clear thinking and dependable execution.</p></div></section>
      <section className="about-page-section section-pad"><div className="wrap about-page-grid"><div className="about-page-copy"><p className="eyebrow eyebrow-dark">HOW WE THINK ABOUT THE WORK</p><h2>Tools are only useful<br />when they help <span>people.</span></h2><p>Every organization has different people, pressures, and ambitions. We take time to understand those realities before shaping a solution. Then we stay close through design, delivery, and the next stage of growth.</p><p>Our goal is straightforward: leave you with systems that make sense, insights you can act on, and a team that understands how to keep moving.</p><Link className="inline-link" href="/services">Explore what we do <ArrowUpRight size={16} /></Link></div><div className="about-proof"><div className="proof-header"><span className="proof-icon"><ShieldCheck size={20} /></span><span>BUILT ON TRUST & FOLLOW-THROUGH</span></div><div className="stats-grid"><div className="stat"><strong>100<span>+</span></strong><span>Projects delivered</span></div><div className="stat"><strong>50<span>+</span></strong><span>Happy clients</span></div><div className="stat"><strong>10<span>+</span></strong><span>Years experience</span></div></div><div className="proof-footer"><span><Check size={15} /> Practical by design</span><span><Check size={15} /> Collaborative throughout</span></div></div></div></section>
      <section className="approach-section section-pad" id="approach"><div className="wrap"><div className="approach-top"><div><p className="eyebrow"><span className="eyebrow-mark" /> HOW WE WORK</p><h2>Clear thinking.<br /><span>Useful outcomes.</span></h2></div><p>Good technology starts with listening. We keep the process collaborative, practical, and focused on what success looks like for you.</p></div><div className="steps-grid">{steps.map((step) => <article className="step" key={step.number}><div className="step-top"><span>{step.number}</span><span className="step-marker"><Check size={15} /></span></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
      <section className="about-cta"><div className="wrap"><p>Ready to make your next move?</p><Link href="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div></section>
    </main>
  );
}
