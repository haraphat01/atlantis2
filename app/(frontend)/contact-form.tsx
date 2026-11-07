"use client";

import { ArrowRight } from "lucide-react";
import { useState, useTransition } from "react";

import { submitContactForm } from "./contact-actions";

export default function ContactForm({ services }: { services: string[][] }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  if (isSubmitted) {
    return <div className="formSuccess" role="status">
      <span className="eyebrow">REQUEST RECEIVED</span>
      <h3>Thank you for reaching out.</h3>
      <p>Your consultation request has been sent to Atlantic Fortis. We will follow up with the next step.</p>
      <button className="textLink" type="button" onClick={() => setIsSubmitted(false)}>Send another request <ArrowRight size={16} /></button>
    </div>;
  }

  return <form className="form" onSubmit={(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setError("");
    startTransition(async () => {
      try {
        const result = await submitContactForm(formData);
        if (result.ok) setIsSubmitted(true);
        else setError(result.error ?? "We couldn't send your request. Please try again.");
      } catch {
        setError("We couldn't send your request. Please check your connection and try again.");
      }
    });
  }}>
    <div className="two"><label>Name<input name="name" required maxLength={200} placeholder="Your name" /></label><label>Organization<input name="organization" required maxLength={200} placeholder="Company name" /></label></div>
    <div className="two"><label>Business email<input name="email" required type="email" maxLength={254} placeholder="you@company.com" /></label><label>Phone <span className="optional">(optional)</span><input name="phone" type="tel" maxLength={50} placeholder="+1 000 000 0000" /></label></div>
    <div className="two"><label>Job title <span className="optional">(optional)</span><input name="jobTitle" maxLength={200} placeholder="Your role" /></label><label>Organization size <span className="optional">(optional)</span><select name="organizationSize" defaultValue=""><option value="">Select a range</option><option>1-49 employees</option><option>50-249 employees</option><option>250-1,000 employees</option><option>More than 1,000 employees</option></select></label></div>
    <label>Area of interest<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service[1]}>{service[1]}</option>)}</select></label>
    <label>Tell us about your requirement<textarea name="message" rows={5} maxLength={5000} placeholder="What are you trying to solve or prepare for?" /></label>
    <label>Preferred contact method <span className="optional">(optional)</span><select name="contactMethod" defaultValue="Email"><option>Email</option><option>Phone</option><option>Video meeting</option></select></label>
    <label className="formTrap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    {error && <p className="formError" role="alert">{error}</p>}
    <button className="button light" type="submit" disabled={isPending}>{isPending ? "Sending..." : "Start a Conversation"} <ArrowRight size={17} /></button>
    <small>By submitting this form, you are requesting an initial business conversation. No confidential incident details should be included.</small>
  </form>;
}
