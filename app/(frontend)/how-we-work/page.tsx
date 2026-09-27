import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Atlantic Fortis",
  description: "See how Atlantic Fortis moves from understanding your needs to evidence-based assessment, prioritized recommendations, and ongoing support."
};

const engagementSteps = [
  {
    title: "Understand the need",
    description: "We learn about your business objective, cybersecurity concern, requirements, timeline, internal capabilities, and desired outcome.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1100&q=85",
    alt: "Open notebook and pencil on a desk, ready for a first conversation"
  },
  {
    title: "Define scope and approach",
    description: "Together, we agree on scope, stakeholders, assessment criteria, deliverables, assumptions, timeline, and engagement model."
  },
  {
    title: "Gather evidence and context",
    description: "We review relevant documents, speak with stakeholders, walk through processes, and gather the evidence needed for the engagement.",
    image: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&fit=crop&w=1100&q=85",
    alt: "Stack of document folders gathered for review"
  },
  {
    title: "Assess and analyze",
    description: "We identify risks, gaps, control weaknesses, root causes, dependencies, and their implications for your business."
  },
  {
    title: "Validate findings",
    description: "We discuss key findings with your team to confirm accuracy, understand context, and consider practical options.",
    image: "https://images.unsplash.com/photo-1709734110054-3b0db38c959c?auto=format&fit=crop&w=1100&q=85",
    alt: "Pen resting on a report of findings and percentages"
  },
  {
    title: "Report and prioritize",
    description: "You receive clear findings and recommendations, with priorities and, where appropriate, a roadmap, treatment plan, or executive briefing."
  },
  {
    title: "Support improvement",
    description: "When needed, we continue with implementation support, remediation tracking, ongoing advisory, training, or periodic reassessment.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
    alt: "Modern buildings representing long-term organizational resilience"
  }
];

export default function HowWeWorkPage() {
  return <main className="howWorkPage">
    <section className="howWorkIntro">
      <div className="howWorkIntroCopy">
        <div className="eyebrow">HOW WE WORK</div>
        <h1>A clear path from<br /><em>concern to action.</em></h1>
        <p>Every engagement starts with your business context. We agree on the work, examine the evidence, validate what we find, and make the next steps clear and practical.</p>
        <a className="workIntroLink" href="#engagement-process">Explore our process <ArrowRight size={17} /></a>
      </div>
      <div className="howWorkHeroImage">
        <img src="https://images.unsplash.com/photo-1661435036699-8686dbfc5304?auto=format&fit=crop&w=1600&q=90" alt="Aerial view of a single road running through a dense forest" />
        <span>INDEPENDENT ADVICE. PRACTICAL PROGRESS.</span>
      </div>
    </section>

    <section className="workProcess" id="engagement-process">
      <div className="workProcessHeading"><div className="eyebrow">A STRUCTURED ENGAGEMENT</div><h2>Seven steps.<br /><em>One clear direction.</em></h2></div>
      <div className="workSteps" aria-label="Client engagement process">
        {engagementSteps.map((step, index) => <article className={`workStep${step.image ? " hasImage" : ""}`} key={step.title}>
          <div className="workStepMarker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
          <div className="workStepCopy"><span className="workStepKicker">PHASE {String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></div>
          {step.image && <div className="workStepImage"><img src={step.image} alt={step.alt} loading="lazy" /></div>}
      </article>)}
      </div>
    </section>

    <section className="workDelivery">
      <div className="workDeliveryTitle"><div className="eyebrow">FLEXIBLE BY DESIGN</div><h2>Expert support, shaped around the work.</h2><div className="deliveryRule" /></div>
      <div className="workDeliveryCopy"><div><span>ENGAGEMENT MODELS</span><p>Fixed-scope projects, recurring advisory retainers, time-based consulting, or broader program support.</p></div><div><span>HOW WE DELIVER</span><p>Virtual-first and hybrid. We work remotely where it is effective, and on site when audits, workshops, interviews, assessments, or incident-related work benefit from being there.</p></div></div>
    </section>

    <section className="serviceCta"><div><div className="eyebrow">START A CONVERSATION</div><h2>Bring us the concern behind the requirement.</h2><p>We will help identify a practical starting point and define the right next step.</p></div><a className="button light" href="/#contact">Discuss your needs <ArrowRight size={17} /></a></section>
  </main>;
}