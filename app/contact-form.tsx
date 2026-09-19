"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactForm({ services }: { services: string[][] }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return <div className="formSuccess" role="status">
      <span className="eyebrow">REQUEST RECEIVED</span>
      <h3>Thank you for reaching out.</h3>
      <p>Your consultation request is ready to be connected to Atlantic Fortis. We will follow up with the next step.</p>
      <button className="textLink" type="button" onClick={() => setIsSubmitted(false)}>Send another request <ArrowRight size={16} /></button>
    </div>;
  }

  return <form className="form" onSubmit={(event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }}>
    <div className="two"><label>Name<input required placeholder="Your name" /></label><label>Organization<input required placeholder="Company name" /></label></div>
    <div className="two"><label>Business email<input required type="email" placeholder="you@company.com" /></label><label>Phone <span className="optional">(optional)</span><input type="tel" placeholder="+1 000 000 0000" /></label></div>
    <div className="two"><label>Job title <span className="optional">(optional)</span><input placeholder="Your role" /></label><label>Organization size <span className="optional">(optional)</span><select defaultValue=""><option value="">Select a range</option><option>1-49 employees</option><option>50-249 employees</option><option>250-1,000 employees</option><option>More than 1,000 employees</option></select></label></div>
    <label>Area of interest<select defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service[1]}>{service[1]}</option>)}</select></label>
    <label>Tell us about your requirement<textarea rows={5} placeholder="What are you trying to solve or prepare for?" /></label>
    <label>Preferred contact method <span className="optional">(optional)</span><select defaultValue="Email"><option>Email</option><option>Phone</option><option>Video meeting</option></select></label>
    <button className="button light" type="submit">Start a Conversation <ArrowRight size={17} /></button>
    <small>By submitting this form, you are requesting an initial business conversation. No confidential incident details should be included.</small>
  </form>;
}