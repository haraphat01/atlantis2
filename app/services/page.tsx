import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Atlantic Fortis",
  description: "Explore Atlantic Fortis cybersecurity advisory, governance, resilience, compliance, audit, program development and awareness services."
};

export default function ServicesPage() {
  return <main className="servicesPage">
    <header className="serviceNav"><a className="brand" href="/"><Image src="/logo.png" alt="Atlantic Fortis" width={191} height={90} className="brandLogo" priority /></a><a className="button dark" href="/#contact">Request a Consultation <ArrowRight size={16} /></a></header>
    <section className="servicesPageIntro"><div className="eyebrow">OUR CAPABILITIES</div><h1>Cybersecurity support<br /><em>built around your needs.</em></h1><p>From risk visibility and governance to assurance, resilience and sustainable program development, Atlantic Fortis helps organizations make confident security decisions.</p></section>
    <section className="servicesPageGrid">{services.map((service) => <a className="serviceIndexCard" href={`/services/${service.slug}`} key={service.slug}><span className="serviceNumber">{service.number}</span><h2>{service.title}</h2><p>{service.summary}</p><span className="textLink">Explore service <ArrowRight size={16} /></span></a>)}</section>
    <section className="serviceCta"><div><div className="eyebrow">NOT SURE WHERE TO START?</div><h2>Bring us the business concern.</h2><p>We can help connect the concern, requirement or risk to the right starting point.</p></div><a className="button light" href="/#contact">Start a conversation <ArrowRight size={17} /></a></section>
  </main>;
}