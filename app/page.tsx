import {
  ArrowRight, ShieldCheck, LockKeyhole, Activity, FileCheck2, Landmark, CheckCircle2
} from "lucide-react";
import ContactForm from "./contact-form";
import SiteHeader from "./site-header";
import { services as serviceDetails } from "./services/data";

const services = [
  ["01","Cybersecurity Risk Advisory","Understand, prioritize and manage risks that could affect your business, technology, data or customers.","Maturity, threat, cloud, AI, regulatory and third-party risk assessments with prioritized roadmaps."],
  ["02","Cybersecurity Governance","Turn business requirements and obligations into clear ownership, policies and repeatable operating practices.","Security policies, privacy governance, standards, procedures, business continuity and disaster recovery."],
  ["03","Cybersecurity Operational Resilience","Prepare to prevent, detect, respond to, recover from and adapt to cyber threats and disruption.","Threat intelligence, incident response, identity, cloud, endpoint, network, data and security operations advisory."],
  ["04","Regulatory Framework Compliance","Prepare for assurance and certification activities with a practical path from gaps to readiness.","ISO, NIST, CIS, SOC 2, PCI DSS, PIPEDA, GDPR and HIPAA readiness and control improvement support."],
  ["05","IT Audit & Control Assurance","Get an independent, evidence-based view of technology controls, governance and control effectiveness.","IT General Controls reviews and risk-based internal audits covering access, change, operations and recovery."],
  ["06","Cybersecurity Program Development","Build sustainable security capabilities with strategy, governance, metrics and accountable execution.","Information security and AI management systems, cybersecurity strategy and multi-year roadmaps."],
  ["07","Security Awareness Training","Improve workforce security behaviour through practical, measurable and role-relevant learning.","Ethical phishing simulations and targeted training for executives, privileged users and higher-risk roles."],
];

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

const frameworks = ["ISO/IEC 27001","ISO 22301","ISO 27701","NIST CSF 2.0","NIST SP 800-53","CIS Controls","SOC 2","PCI DSS","PIPEDA","GDPR","HIPAA"];

export default function Home(){
  return <>
    <a className="skipLink" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">

    <section className="hero">
      <div className="heroCopy">
        <div className="eyebrow"><span/> INDEPENDENT CYBERSECURITY ADVISORY</div>
        <h1>Security that makes<br/><em>business stronger.</em></h1>
        <p>Atlantic Fortis helps organizations understand cyber risk, strengthen governance, meet assurance requirements and build resilience with clear, practical advice grounded in evidence.</p>
        <div className="heroAudience"><b>For growing and regulated organizations</b><span>Senior cybersecurity expertise for teams that need specialist capacity without unnecessary complexity.</span></div>
        <div className="heroActions"><a className="button dark" href="#contact">Request a Consultation <ArrowRight size={17}/></a><a className="textLink" href="#services">Explore our services <ArrowRight size={16}/></a></div>
        <div className="heroTrust"><div><b>Independent</b><span>No hardware or software sales</span></div><div><b>Evidence-led</b><span>Findings tied to business impact</span></div><div><b>Practical</b><span>Priorities you can act on</span></div></div>
      </div>
      <div className="heroVisual">
        <div className="imagePanel"/>
        <div className="floatingCard"><div className="cardIcon"><LockKeyhole size={18}/></div><div><small>SECURITY POSTURE</small><b>Visibility → Action</b></div><span className="pulse"/></div>
        <div className="gridLabel">RISK · GOVERNANCE · RESILIENCE</div>
      </div>
    </section>

    <section className="problem">
      <div><div className="eyebrow">CYBERSECURITY, IN BUSINESS TERMS</div><h2>When the question is bigger than the technology.</h2></div>
      <div className="problemText"><p>Your organization may know it needs to improve security — but not where to start, what matters most, or how to demonstrate progress.</p><p>Whether a customer, auditor, insurer, regulator or board is asking for stronger security, we connect technical reality to business impact and prioritized action.</p><a className="textLink" href="#approach">See how we work <ArrowRight size={16}/></a></div>
    </section>

    <section className="audience section" id="audience">
      <div className="sectionHead"><div><div className="eyebrow">WHO WE SERVE</div><h2>Specialist support for <em>important moments.</em></h2></div><p>We work with organizations that need senior-level cybersecurity guidance, but do not always need a full-time security executive or a large consulting firm.</p></div>
      <div className="audienceGrid"><article><span>01</span><h3>Mid-market enterprises and technology scale-ups</h3><p>Organizations with 50 to 1,000 employees preparing for customer assurance, investment, insurance, growth or formal security expectations.</p></article><article><span>02</span><h3>Regulated and critical infrastructure organizations</h3><p>Teams that need independent assurance, stronger resilience, control assessment and structured cybersecurity governance.</p></article><article><span>03</span><h3>High-risk small businesses</h3><p>Law firms, accounting practices, wealth managers and other firms handling sensitive information that need practical foundational protection.</p></article></div>
    </section>

    <section className="services section" id="services">
      <div className="sectionHead"><div><div className="eyebrow">OUR CAPABILITIES</div><h2>Seven disciplines.<br/><em>One advisory partner.</em></h2></div><p>From the first risk assessment to a sustainable security program, our services are designed to work together around your business needs.</p></div>
      <div className="serviceGrid">{services.map(([n,t,d,s])=><article className="serviceCard" key={n}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p><div className="rule"/><small>{s}</small><a href={`/services/${serviceDetails[Number(n) - 1].slug}`} aria-label={`Explore ${t}`}><ArrowRight size={18}/></a></article>)}</div>
    </section>

    <section className="statement"><div className="statementInner"><div className="quoteMark">“</div><h2>Enterprise-level cybersecurity expertise,<br/><em>without unnecessary complexity.</em></h2><p>Independent advice. Business-focused thinking. Practical recommendations.</p><a className="button light" href="#contact">Talk to an Advisor <ArrowRight size={17}/></a></div></section>

    <section className="industries section" id="industries">
      <div className="sectionHead"><div><div className="eyebrow">SECTORS WE SERVE</div><h2>Security shaped<br/><em>by your context.</em></h2></div><p>Different industries carry different risks, obligations and operational realities. Our advisory work starts there.</p></div>
      <div className="industryGrid">{industries.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><ArrowRight size={17}/></article>)}</div>
    </section>

    <section className="approach section" id="approach">
      <div className="approachIntro"><div className="eyebrow">HOW WE WORK</div><h2>A structured path from <em>uncertainty to action.</em></h2><p>Every engagement is scoped around the business objective, the evidence available and the outcome you need.</p><a className="textLink" href="#contact">Start a conversation <ArrowRight size={16}/></a></div>
      <div className="steps">{[
        ["01","Understand the Need","Business objective, concern, regulatory requirement and desired outcome."],
        ["02","Define Scope & Approach","Clear scope, stakeholders, criteria, deliverables and timeline."],
        ["03","Gather Evidence","Documents, interviews, walkthroughs and relevant technical evidence."],
        ["04","Assess & Analyze","Risks, gaps, control weaknesses and business implications."],
        ["05","Validate Findings","Work with stakeholders to confirm facts and practical options."],
        ["06","Report & Prioritize","Decision-relevant findings, recommendations and a prioritized roadmap."],
        ["07","Support Improvement","Implementation support, advisory, training or reassessment when needed."]
      ].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
    </section>

    <section className="frameworks"><div className="sectionHead"><div><div className="eyebrow">RECOGNIZED FRAMEWORKS</div><h2>Familiar standards.<br/><em>Practical application.</em></h2></div><p>Frameworks should guide decisions — not become a logo wall. We help clients understand gaps, readiness and the work required to improve.</p></div><div className="frameworkGrid">{frameworks.map((f,i)=><div key={f}><span>◈</span>{f}</div>)}</div></section>

    <section className="about section" id="about"><div className="aboutImage"/><div className="aboutCopy"><div className="eyebrow">ABOUT ATLANTIC FORTIS</div><h2>An independent advisor for a digital world.</h2><p>Atlantic Fortis is an independent B2B cybersecurity advisory firm serving clients across Canada and Sub-Saharan Africa. We help organizations understand cyber risk, strengthen governance and build lasting resilience.</p><p>We do not sell hardware, resell software or operate a help desk. Our recommendations are based solely on what is right for the client, matched to its risks, data sensitivity and regulatory environment.</p><div className="principles"><span><CheckCircle2 size={17}/> Evidence-based</span><span><CheckCircle2 size={17}/> Independent</span><span><CheckCircle2 size={17}/> Business-focused</span><span><CheckCircle2 size={17}/> Practical</span></div><a className="textLink" href="/about">Learn more about us <ArrowRight size={16}/></a></div></section>

    <section className="insights section" id="insights"><div className="sectionHead"><div><div className="eyebrow">INSIGHTS & RESOURCES</div><h2>Clarity for the<br/><em>decisions ahead.</em></h2></div><a className="textLink" href="#contact">Explore insights <ArrowRight size={16}/></a></div><div className="insightGrid"><article><div className="insightImage i1"/><span>CYBERSECURITY</span><h3>What a cybersecurity maturity assessment should tell your board</h3><a href="#contact">Read insight <ArrowRight size={15}/></a></article><article><div className="insightImage i2"/><span>COMPLIANCE</span><h3>From framework requirements to an actionable readiness roadmap</h3><a href="#contact">Read insight <ArrowRight size={15}/></a></article><article><div className="insightImage i3"/><span>RESILIENCE</span><h3>Building recovery readiness before an incident tests it</h3><a href="#contact">Read insight <ArrowRight size={15}/></a></article></div></section>

    <section className="contact" id="contact"><div className="contactIntro"><div className="eyebrow">START A CONVERSATION</div><h2>Let’s understand<br/><em>what you need.</em></h2><p>Tell us a little about your organization and the cybersecurity requirement you are working through. We’ll use that context to shape the first conversation.</p><div className="contactMeta"><span><FileCheck2 size={18}/> Confidential discovery</span><span><Activity size={18}/> Virtual-first delivery across Canada</span><span><Landmark size={18}/> Canada & Sub-Saharan Africa</span></div></div><ContactForm services={services}/></section>

    <footer><div className="footerTop"><a className="brand lightBrand" href="#"><span className="brandMark"><ShieldCheck size={20}/></span><span>ATLANTIC<br/><b>FORTIS</b></span></a><div><span>Independent cybersecurity advisory</span><a href="mailto:info@atlanticfortis.com">info@atlanticfortis.com</a></div><a className="button light" href="#contact">Request a Consultation <ArrowRight size={17}/></a></div><div className="footerBottom"><span>© 2026 Atlantic Fortis Inc. All rights reserved.</span><span>Risk · Governance · Resilience · Assurance</span></div></footer>
    </main>
  </>
}