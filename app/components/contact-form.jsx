"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get("name").toString().trim();
    const email = fields.get("email").toString().trim();
    const organization = fields.get("organization").toString().trim() || "Not provided";
    const message = fields.get("message").toString().trim();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\n${message}`);
    window.location.href = `mailto:info@infinitianalytics.com?subject=${subject}&body=${body}`;
    setFeedback("Your email app is opening with your message.");
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>PROJECT ENQUIRY</span>
        <h2>Tell us what you&apos;re working on.</h2>
        <p>A few details are enough to start a useful conversation.</p>
      </div>
      <div className="contact-form-grid">
        <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
        <label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label>
      </div>
      <label>Organization <span className="optional-label">OPTIONAL</span><input name="organization" autoComplete="organization" placeholder="Company or organization" /></label>
      <label>What would you like to work through?<textarea name="message" rows="5" placeholder="Share the challenge, goal, or idea." required /></label>
      <div className="contact-form-submit"><button className="button button-lime" type="submit">Send an enquiry <ArrowUpRight size={16} /></button><p className="form-feedback" aria-live="polite">{feedback || "We usually respond within one business day."}</p></div>
    </form>
  );
}
