import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { cache } from "react";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";
import type { Media } from "@/payload-types";
import { formatDate } from "../format";

export const dynamic = "force-dynamic";

const getPost = cache(async (slug: string) => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug }, _status: { equals: "published" } },
    depth: 1,
    limit: 1,
  });
  return docs[0];
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const cover = post.coverImage as Media | null | undefined;
  return {
    title: `${post.title} | Atlantic Fortis`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: cover?.url ? [cover.url] : undefined },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const cover = post.coverImage as Media | null | undefined;

  return <main className="servicePage">
    <header className="serviceNav">
      <a className="brand" href="/"><Image src="/logo.png" alt="Atlantic Fortis" width={191} height={90} className="brandLogo" priority /></a>
      <a className="textLink" href="/blog">All insights <ArrowLeft size={16} /></a>
      <a className="button dark" href="/#contact">Start a Conversation <ArrowRight size={16} /></a>
    </header>

    <article className="blogArticle">
      <a className="backLink" href="/blog"><ArrowLeft size={15} /> All insights</a>
      <div className="eyebrow">{post.category?.toUpperCase()}</div>
      <h1>{post.title}</h1>
      <p className="blogLead">{post.excerpt}</p>
      <span className="blogMeta">{post.author}{post.publishedAt && ` · ${formatDate(post.publishedAt)}`}</span>
      {cover?.url && <img className="blogCover" src={cover.url} alt={cover.alt} />}
      <RichText className="blogContent" data={post.content} />
    </article>

    <section className="serviceCta"><div><div className="eyebrow">START A CONVERSATION</div><h2>Let’s understand what your organization needs.</h2><p>Atlantic Fortis scopes each engagement around your business objective, evidence, timeline and desired outcome.</p></div><a className="button light" href="/#contact">Start a Conversation <ArrowRight size={17} /></a></section>
  </main>;
}
