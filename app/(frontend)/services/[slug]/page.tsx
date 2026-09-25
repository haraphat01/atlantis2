import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getService, services } from "../data";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: `${service.title} | Atlantic Fortis`, description: service.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <main className="servicePage">
    <section className="serviceHero">
      <div className="serviceHeroCopy">
        <a className="backLink" href="/services"><ArrowLeft size={15} /> All services</a>
        <span className="serviceNumber">{service.number}</span>
        <div className="eyebrow">ATLANTIC FORTIS CAPABILITY</div>
        <h1>{service.title}</h1>
        <p className="serviceLead">{service.summary}</p>
        <a className="button dark" href="/#contact">Discuss your requirements <ArrowRight size={17} /></a>
      </div>
      <div className="serviceHeroImage"><img src={service.image} alt={service.imageAlt} /></div>
    </section>

    <section className="serviceProblem"><div><div className="eyebrow">WHY THIS MATTERS</div><h2>Move from uncertainty to <em>practical action.</em></h2></div><div><p>{service.problem}</p><p className="servicePurpose">{service.purpose}</p></div></section>

    <section className="serviceContent">
      <div className="serviceListBlock"><div className="eyebrow">WHAT WE DO</div><h2>Relevant support for your context.</h2><div className="serviceList">{service.areas.map((area) => <div key={area}><CheckCircle2 size={17} />{area}</div>)}</div></div>
      <div className="serviceListBlock outcomeBlock"><div className="eyebrow">TYPICAL OUTCOMES</div><h2>Useful beyond the report.</h2><div className="serviceList">{service.outcomes.map((outcome) => <div key={outcome}><CheckCircle2 size={17} />{outcome}</div>)}</div></div>
    </section>

    <section className="serviceFrameworks"><div><div className="eyebrow">RELEVANT FRAMEWORKS</div><h2>Standards applied with judgment.</h2></div><div className="serviceFrameworkGrid">{service.frameworks.map((framework) => <span key={framework}>{framework}</span>)}</div></section>

    <section className="serviceCta"><div><div className="eyebrow">START A CONVERSATION</div><h2>Let’s understand what your organization needs.</h2><p>Atlantic Fortis scopes each engagement around your business objective, evidence, timeline and desired outcome.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}