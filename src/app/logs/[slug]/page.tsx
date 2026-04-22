import { allLogs } from "content-collections";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";

export async function generateStaticParams() {
  return allLogs.map((log) => ({
    slug: log.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const log = allLogs.find((l) => l.slug === resolvedParams.slug);
  
  if (!log) return {};

  const ogUrl = new URL('https://sunny.vestcodes.co/api/og.png');
  ogUrl.searchParams.set('title', log.title);
  ogUrl.searchParams.set('date', format(new Date(log.date), 'yyyy-MM-dd'));

  return {
    title: log.title,
    description: log.summary,
    authors: [{ name: "Sunny" }],
    keywords: log.tags,
    alternates: {
      canonical: `https://sunny.vestcodes.co/logs/${log.slug}`,
    },
    openGraph: {
      title: log.title,
      description: log.summary,
      type: 'article',
      publishedTime: new Date(log.date).toISOString(),
      url: `https://sunny.vestcodes.co/logs/${log.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: log.title,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: log.title,
      description: log.summary,
      images: [ogUrl.toString()]
    }
  };
}

export default async function LogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const log = allLogs.find((l) => l.slug === resolvedParams.slug);

  if (!log) {
    notFound();
  }

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: log.title,
    description: log.summary,
    datePublished: new Date(log.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Sunny',
      url: 'https://sunny.vestcodes.co',
    },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/logs" className="mono-accent text-sun-yellow hover:text-sun-orange flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> RETURN_TO_LOGS
      </Link>
      
      <header className="mb-16 border-b border-steel-gray pb-8">
        <div className="mono-accent text-off-white/60 mb-4">{format(new Date(log.date), 'yyyy-MM-dd')}</div>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">{log.title}</h1>
        <div className="flex gap-2">
          {log.tags.map(tag => (
            <span key={tag} className="text-xs font-mono bg-steel-gray/30 px-2 py-1 border border-steel-gray text-sun-yellow uppercase">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none font-mono text-off-white/90 prose-headings:font-display prose-headings:uppercase prose-headings:font-bold prose-h1:text-sun-yellow prose-a:text-sun-orange prose-a:no-underline hover:prose-a:underline">
        <MDXContent code={log.mdx} />
      </div>
    </article>
  );
}
