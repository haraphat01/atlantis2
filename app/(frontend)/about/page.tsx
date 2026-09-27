import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Atlantic Fortis | Independent Cybersecurity Advisory",
  description: "Learn about Atlantic Fortis, an independent cybersecurity advisory firm helping organizations manage cyber risk, strengthen governance and build lasting resilience."
};

const principles = [
  ["Independent", "We do not sell hardware, resell software or operate a help desk. Our advice is based on what is right for the client."],
  ["Evidence-based", "We ground recommendations in documents, interviews, walkthroughs, control evidence and the client's operating context."],
  ["Business-focused", "We connect technical findings to business impact, regulatory exposure, operational risk and management decisions."],
  ["Practical", "We turn findings into proportionate priorities, accountable actions, roadmaps and support for measurable improvement."]
];

export default function AboutPage() {
  return <main className="aboutPage">
    <section className="aboutHero"><div className="aboutHeroCopy"><div className="eyebrow">ABOUT ATLANTIC FORTIS</div><h1>An independent advisor for a <em>digital world.</em></h1><p>Atlantic Fortis is an independent B2B cybersecurity advisory firm serving clients across Canada and Sub-Saharan Africa. We help organizations understand cyber risk, strengthen governance and build the resilience needed to operate safely in a digital world.</p><a className="button dark" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></div><div className="aboutHeroImage"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85" alt="Earth at night seen from orbit, with city lights across the continents" /></div></section>

    <section className="aboutIntro"><div><div className="eyebrow">WHO WE ARE</div><h2>Enterprise-level expertise for organizations that need <em>clarity and capacity.</em></h2></div><div><p>We work with growing mid-market companies and technology scale-ups that need senior-level security expertise but are not yet ready to hire a full-time security executive. We also support regulated and critical-infrastructure organizations that must meet strict industry and government security standards.</p><p>Our clients include organizations handling sensitive personal, financial, legal or business information that need practical protection without unnecessary complexity.</p></div></section>

    <section className="aboutMission"><div className="missionCard"><div className="eyebrow">OUR MISSION</div><h2>Clear guidance for stronger security and lasting resilience.</h2><p>We help organizations strengthen their security posture, manage cyber risk, and build lasting resilience through clear, practical guidance grounded in trusted security best practices.</p></div><div className="visionCard"><div className="eyebrow">OUR VISION</div><h2>A future where organizations are secure, resilient and ready.</h2><p>A future where every organization's data, systems and people are secure, resilient, and ready for future threats.</p></div></section>

    <section className="aboutWhy"><div className="aboutWhyImage"><img src="https://images.unsplash.com/photo-1601521149213-2f6ed2dbc4af?auto=format&fit=crop&w=1600&q=85" alt="Lighthouse casting its beam over a rocky coastline at dusk" /></div><div className="aboutWhyCopy"><div className="eyebrow">WHY ATLANTIC FORTIS</div><h2>Advice that is proportionate, accountable and built to be used.</h2><p>Organizations face growing pressure from customers, insurers, investors, regulators and business partners to demonstrate that they can protect information and respond to cyber threats.</p><p>We take the time to understand each client's specific risks, industry requirements and business goals before recommending a course of action. The scope of our work is matched to the size of the organization, the sensitivity of its data and its regulatory environment.</p><div className="principles aboutPrinciples">{principles.map(([title, description]) => <div key={title}><CheckCircle2 size={18} /><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>

    <section className="aboutCommitment"><div><div className="eyebrow">OUR COMMITMENT</div><h2>Clear guidance that helps organizations grow safely.</h2></div><div><p>Strong cybersecurity should be achievable for every organization, not just those with large budgets. Atlantic Fortis is committed to delivering clear risk visibility, practical guidance, and dependable support to every client we serve.</p><p>We help clients make informed decisions, strengthen their security posture, and build resilience for today's changing threat landscape.</p></div></section>

    <section className="aboutCta"><div><div className="eyebrow">START A CONVERSATION</div><h2>Bring us the concern behind the requirement.</h2><p>We will help you identify a practical starting point and the right next step.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}