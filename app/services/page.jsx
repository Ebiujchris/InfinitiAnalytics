import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ServiceCard } from "../components/content-cards";
import { services } from "../site-data";

export const metadata = { title: "Services | Infiniti Analytics" };

export default function ServicesPage() {
  return (
    <main className="route-page">
      <section className="route-hero"><div className="wrap route-hero-inner"><p className="eyebrow eyebrow-dark">WHAT WE DO</p><h1>Technology that fits<br />the <span>way you work.</span></h1><p>From the first question to a working solution, we bring software, analytics, and business insight together to move your organization forward.</p><div className="route-hero-meta"><span><Check size={15} /> Grounded in your goals</span><span><Check size={15} /> Built to be useful</span></div></div></section>
      <section className="route-section section-pad"><div className="wrap"><div className="route-section-heading"><div><p className="eyebrow eyebrow-dark">OUR CAPABILITIES</p><h2>Four ways to make<br />progress <span>practical.</span></h2></div><p>Bring us a specific challenge or a broader opportunity. We’ll help you find the right place to begin.</p></div><div className="services-list">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div></div></section>
      <section className="service-detail-band"><div className="wrap service-detail-layout"><div><p className="eyebrow"><span className="eyebrow-mark" /> FROM FIRST IDEA TO EVERYDAY USE</p><h2>Good technology<br />should earn its place.</h2></div><p>We build around real needs, share progress clearly, and pay attention to what happens after launch. The result should make work easier, decisions clearer, and your next step more achievable.</p><Link className="button button-lime" href="/contact">Talk through your goals <ArrowUpRight size={16} /></Link></div></section>
    </main>
  );
}
