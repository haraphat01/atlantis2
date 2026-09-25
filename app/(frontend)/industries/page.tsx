import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Atlantic Fortis",
  description: "Explore the sectors Atlantic Fortis supports, including financial services, technology, healthcare, energy, public sector and more."
};

const industries = [
  ["Financial Services & FinTech","Risk, regulation, third-party assurance, privacy and resilience."],
  ["Technology, SaaS & Cloud","SOC 2, ISO 27001, customer assurance and secure growth."],
  ["Healthcare & Life Sciences","Sensitive data, privacy, access governance and resilience."],
  ["Professional Services","Confidential client information, employee risk and preparedness."],
  ["Energy & Utilities","Critical infrastructure risk, resilience, suppliers and incident response."],
  ["Telecommunications","Network security, identity, resilience and risk governance."],
  ["Manufacturing","OT dependencies, supply chain, ransomware and continuity."],
  ["Transportation & Logistics","Supplier dependencies, identity, continuity and incident preparedness."],
  ["Government & Public-Sector Supply Chains","Control frameworks, assurance, risk and security requirements."]
];

export default function IndustriesPage() {
  return <main className="servicesPage">
    <section className="servicesPageIntro"><div className="eyebrow">INDUSTRIES</div><h1>Security shaped<br /><em>by your context.</em></h1><p>Different industries carry different risks, obligations and operational realities. Atlantic Fortis works with organizations that need security advice shaped by how they operate and what they must protect.</p></section>
    <section className="servicesPageGrid">{industries.map(([title, description], index) => <article className="serviceIndexCard" key={title}><span className="serviceNumber">{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{description}</p><span className="textLink">Security support for this sector <ArrowRight size={16} /></span></article>)}</section>
    <section className="serviceCta"><div><div className="eyebrow">NEED ADVICE FOR YOUR SECTOR?</div><h2>Bring us your business context.</h2><p>We can help identify the risks, obligations and security priorities that matter most in your operating environment.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}
