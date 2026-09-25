import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Media } from "@/payload-types";
import { formatDate } from "./format";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights | Atlantic Fortis",
  description: "Perspectives on cyber risk, governance, compliance and resilience from Atlantic Fortis."
};

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 1,
    limit: 24,
  });

  return <main className="servicesPage">
    <header className="serviceNav"><a className="brand" href="/"><Image src="/logo.png" alt="Atlantic Fortis" width={191} height={90} className="brandLogo" priority /></a><a className="button dark" href="/#contact">Start a Conversation <ArrowRight size={16} /></a></header>
    <section className="servicesPageIntro"><div className="eyebrow">INSIGHTS</div><h1>Security thinking<br /><em>in business terms.</em></h1><p>Practical perspectives on cyber risk, governance, compliance and resilience for organizations that need clear direction.</p></section>
    {posts.length === 0
      ? <p className="blogEmpty">No articles published yet. Check back soon.</p>
      : <section className="blogGrid">{posts.map((post) => {
        const cover = post.coverImage as Media | null | undefined;
        return <a className="blogCard" href={`/blog/${post.slug}`} key={post.id}>
          <div className="blogCardImage">{cover?.url && <img src={cover.sizes?.card?.url || cover.url} alt={cover.alt} />}</div>
          <div className="blogCardBody">
            <span className="blogMeta">{post.category?.toUpperCase()}{post.publishedAt && ` · ${formatDate(post.publishedAt)}`}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className="textLink">Read article <ArrowRight size={16} /></span>
          </div>
        </a>;
      })}</section>}
    <section className="serviceCta"><div><div className="eyebrow">HAVE A SPECIFIC CONCERN?</div><h2>Bring us the business question.</h2><p>We can help connect the concern, requirement or risk to the right starting point.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}
