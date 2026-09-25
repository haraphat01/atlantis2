export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  purpose: string;
  problem: string;
  image: string;
  imageAlt: string;
  areas: string[];
  outcomes: string[];
  frameworks: string[];
};

export const services: Service[] = [
  {
    slug: "cybersecurity-risk-advisory",
    number: "01",
    title: "Cybersecurity Risk Advisory",
    summary: "Understand, prioritize and manage risks that could affect your business, technology, data or customers.",
    purpose: "We help organizations identify, understand, prioritize and manage cybersecurity risks that could affect business objectives, technology, data, customers or regulatory obligations.",
    problem: "You need a clear view of your current exposure, but the available information is fragmented, overly technical or difficult to turn into a decision.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Close-up of secure server hardware and blue status lights",
    areas: ["Cybersecurity maturity assessment", "Cybersecurity risk assessment", "Threat risk assessment", "Cloud security risk assessment", "AI security risk assessment", "Regulatory gap assessment", "Third-party risk assessment"],
    outcomes: ["A defensible view of current maturity and exposure", "Prioritized findings tied to business impact", "Risk registers, treatment plans and practical roadmaps", "Management briefings that support investment and accountability"],
    frameworks: ["NIST CSF 2.0", "CIS Critical Security Controls", "ISO/IEC 27001"]
  },
  {
    slug: "cybersecurity-governance",
    number: "02",
    title: "Cybersecurity Governance",
    summary: "Turn business requirements and obligations into clear ownership, policies and repeatable operating practices.",
    purpose: "We help organizations translate risk, business requirements and regulatory obligations into approved policies, standards, responsibilities and repeatable operating practices.",
    problem: "Your policies may exist, but ownership, exceptions, review cycles and day-to-day operating procedures are not clear enough to make security accountable.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Abstract blue network lines and digital connections",
    areas: ["Security policy development", "Data privacy governance", "Security standards and procedures", "Business continuity planning", "Disaster recovery planning", "Governance roles and decision rights", "Exception and review processes"],
    outcomes: ["Approved policies and standards that people can operate", "Clear accountability, decision rights and control ownership", "Practical governance calendars and review cycles", "Continuity and recovery planning aligned to business priorities"],
    frameworks: ["ISO/IEC 27001", "ISO 22301", "ISO 27701", "PIPEDA", "GDPR"]
  },
  {
    slug: "cybersecurity-operational-resilience",
    number: "03",
    title: "Cybersecurity Operational Resilience",
    summary: "Prepare to prevent, detect, respond to, recover from and adapt to cyber threats and disruption.",
    purpose: "We strengthen an organization's ability to prevent, detect, respond to, recover from and adapt to cybersecurity incidents and operational disruptions.",
    problem: "An incident, outage or technology change could interrupt critical services before teams know who should act, what matters most or how recovery will work.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Rows of illuminated server equipment in a data centre",
    areas: ["Cyber threat intelligence", "Cloud security", "Incident response", "Identity and access management", "Network, endpoint and device security", "Incident response and digital forensics", "Emerging technology and AI security", "Data loss prevention", "Security operations advisory"],
    outcomes: ["Reduced attack exposure across critical environments", "Clearer response roles, escalation paths and priorities", "Improved access governance and recovery readiness", "Practical advice for resilient technology operations"],
    frameworks: ["NIST CSF 2.0", "ISO 22301", "CIS Critical Security Controls"]
  },
  {
    slug: "regulatory-framework-compliance",
    number: "04",
    title: "Regulatory Framework Compliance",
    summary: "Prepare for assurance and certification activities with a practical path from gaps to readiness.",
    purpose: "We support assessment, readiness, implementation, advisory and control improvement. We do not issue certifications or independent attestations.",
    problem: "A customer, regulator, auditor or certification project is asking for evidence of stronger controls, and you need to know what is missing and what to do next.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Abstract close-up of a secure digital interface",
    areas: ["ISO/IEC 27001 readiness", "ISO 22301 business continuity", "ISO 27701 privacy", "NIST CSF 2.0 and NIST SP 800-53", "CIS Critical Security Controls", "SOC 2 readiness", "PCI DSS readiness", "PIPEDA, GDPR and HIPAA support", "AI governance framework alignment"],
    outcomes: ["A clear readiness baseline and gap register", "Evidence mapped to applicable criteria", "Prioritized remediation actions and ownership", "Support preparing for external certification or attestation activities"],
    frameworks: ["ISO/IEC 27001", "ISO 22301", "ISO 27701", "NIST", "SOC 2", "PCI DSS", "PIPEDA", "GDPR", "HIPAA"]
  },
  {
    slug: "it-audit-control-assurance",
    number: "05",
    title: "IT Audit & Control Assurance",
    summary: "Get an independent, evidence-based view of technology controls, governance and control effectiveness.",
    purpose: "We provide independent, evidence-based assessment of technology controls, governance, risk management and control effectiveness.",
    problem: "Leadership, internal audit or a business partner needs confidence that important technology controls are designed appropriately and working as intended.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Secure server hardware viewed in blue light",
    areas: ["IT General Controls review", "IT internal audit", "Access management", "Change management", "Computer operations", "Backup and recovery", "Development controls", "Interfaces, key reports and service organization controls"],
    outcomes: ["Independent findings supported by evidence", "An objective view of design and operating effectiveness", "Risk-based remediation recommendations", "Clear reporting for management, audit committees and stakeholders"],
    frameworks: ["NIST SP 800-53", "SOC 2 Trust Services Criteria", "ISO/IEC 27001"]
  },
  {
    slug: "cybersecurity-program-development",
    number: "06",
    title: "Cybersecurity Program Development",
    summary: "Build sustainable security capabilities with strategy, governance, metrics and accountable execution.",
    purpose: "We help organizations build sustainable cybersecurity management capabilities rather than relying on one-time documents or isolated projects.",
    problem: "Security goals are understood, but initiatives, ownership, metrics and operating processes are not yet connected into a sustainable program.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Abstract security interface with illuminated data lines",
    areas: ["Information security management system development", "AI management system development", "Cybersecurity strategy", "Multi-year security roadmaps", "Target operating models", "Security metrics and reporting", "Program governance and implementation support"],
    outcomes: ["A strategy connected to business objectives and risk appetite", "A sequenced roadmap with accountable owners", "Operating calendars, metrics and management processes", "A durable foundation for continuous improvement"],
    frameworks: ["ISO/IEC 27001", "ISO/IEC 42001", "NIST CSF 2.0", "CIS Controls"]
  },
  {
    slug: "security-awareness-training",
    number: "07",
    title: "Security Awareness Training",
    summary: "Improve workforce security behaviour through practical, measurable and role-relevant learning.",
    purpose: "We reduce human-related cybersecurity risk and improve workforce security knowledge through measurable, role-relevant learning activities.",
    problem: "Employees are expected to make security-sensitive decisions every day, but generic training is not changing behaviour in the roles that carry the most risk.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Abstract digital network pattern in blue and teal",
    areas: ["Ethical phishing simulations", "Executive security awareness", "Privileged user training", "Finance and high-risk role training", "Developer and technology team training", "Security culture improvement", "Targeted learning and reporting"],
    outcomes: ["Measurable awareness and behaviour baselines", "Role-relevant learning for higher-risk teams", "Improved recognition and reporting of suspicious activity", "Actionable results for management and security leaders"],
    frameworks: ["CIS Critical Security Controls", "ISO/IEC 27001"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}