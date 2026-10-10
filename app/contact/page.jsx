import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/contact-form";

export const metadata = { title: "Contact | Infiniti Analytics" };

export default function ContactPage() {
  return (
    <main className="route-page">
      <section className="contact-page section-pad"><div className="wrap contact-page-layout"><div className="contact-page-copy"><p className="eyebrow eyebrow-dark">YOUR NEXT STEP STARTS HERE</p><h1>Let&apos;s make<br />something <span>work better.</span></h1><p>Tell us what you&apos;re working toward. We&apos;ll help you figure out where technology, data, or a better process can make a difference.</p><div className="contact-info-list"><a href="mailto:info@infinitianalytics.com"><span><Mail size={17} /></span><div><small>EMAIL</small><strong>info@infinitianalytics.com</strong></div></a><a href="tel:+256774725437"><span><Phone size={17} /></span><div><small>CALL</small><strong>+256 774 725 437</strong></div></a><div><span><MapPin size={17} /></span><div><small>WORKING WITH</small><strong>Organizations ready to move forward</strong></div></div></div></div><ContactForm /></div></section>
    </main>
  );
}
