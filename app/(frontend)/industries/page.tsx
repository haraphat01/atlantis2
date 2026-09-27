import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Atlantic Fortis",
  description: "Explore the sectors Atlantic Fortis supports, including financial services, technology, healthcare, energy, public sector and more."
};

const industries = [
  { title: "Financial Services & FinTech", description: "Risk management, regulatory oversight, third-party risk, control assurance, privacy, resilience, and customer trust.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85", alt: "Financial data and business analytics on a laptop" },
  { title: "Technology, SaaS & Cloud", description: "SOC 2, ISO 27001, customer security requirements, cloud risk, and secure growth.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85", alt: "Close-up of a computer circuit board" },
  { title: "Healthcare & Life Sciences", description: "Sensitive health information, privacy, access governance, resilience, and regulatory readiness.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85", alt: "Empty, modern hospital corridor" },
  { title: "Professional Services", description: "Confidential client information, email compromise, employee risk, privacy, and incident preparedness.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85", alt: "Unoccupied modern professional office" },
  { title: "Energy & Utilities", description: "Operational resilience, critical infrastructure risk, governance, incident response, and supplier risk.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85", alt: "Electricity transmission lines across an energy landscape" },
  { title: "Telecommunications", description: "Regulatory obligations, service resilience, identity, network security, and risk governance.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85", alt: "Rows of network servers in a data centre" },
  { title: "Manufacturing", description: "Operational technology dependencies, supply chain risk, access control, ransomware exposure, and continuity.", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85", alt: "Automated machinery on a factory production line" },
  { title: "Transportation & Logistics", description: "Operational resilience, supplier dependencies, cyber risk, identity, continuity, and incident preparedness.", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85", alt: "Cargo containers and global shipping logistics" },
  { title: "Government & Public-Sector Supply Chains", description: "Control frameworks, security requirements, assurance, risk assessment, and readiness for government obligations.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85", alt: "Modern civic and commercial buildings" }
];

export default function IndustriesPage() {
  return <main className="industriesPage">
    <section className="industryHero">
      <div className="industryHeroCopy"><div className="eyebrow">INDUSTRIES</div><h1>Security shaped<br /><em>by your context.</em></h1><p>Different industries carry different risks, obligations, and operating realities. We shape our advice around the information, services, and trust your organization needs to protect.</p><a className="industryHeroLink" href="#sector-landscape">Explore sector needs <ArrowRight size={17} /></a></div>
      <div className="industryHeroImage"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90" alt="Rows of illuminated server equipment in a data centre" /><span>ONE ADVISOR. DIFFERENT OPERATING REALITIES.</span></div>
    </section>
    <section className="industryLandscape" id="sector-landscape">
      <div className="industryLandscapeHeading"><div className="eyebrow">SECTOR LANDSCAPE</div><h2>Know the pressures.<br /><em>Protect what matters.</em></h2><p>Relevant security advice starts with understanding how your sector works and what is at stake.</p></div>
      <div className="industryGallery">{industries.map((industry, index) => <article className={`industryTile industryTile${index + 1}`} key={industry.title}>
        <img src={industry.image} alt={industry.alt} loading="lazy" />
        <div className="industryTileOverlay"><span>{String(index + 1).padStart(2, "0")} / SECTOR</span><h3>{industry.title}</h3><p>{industry.description}</p></div>
      </article>)}</div>
    </section>
    <section className="serviceCta"><div><div className="eyebrow">NEED ADVICE FOR YOUR SECTOR?</div><h2>Bring us your business context.</h2><p>We can help identify the risks, obligations and security priorities that matter most in your operating environment.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}
