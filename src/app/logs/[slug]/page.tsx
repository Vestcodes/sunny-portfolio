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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/logs" className="mono-accent text-sun-yellow hover:text-sun-orange flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> RETURN_TO_LOGS
      </Link>
      
      <header className="mb-16 border-b border-steel-gray pb-8">
        <div className="mono-accent text-off-white/60 mb-4">{format(new Date(log.date), 'yyyy-MM-dd')}</div>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">{log.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {log.tags.map(tag => (
            <span key={tag} className="text-xs font-mono bg-steel-gray/30 px-2 py-1 border border-steel-gray text-sun-yellow uppercase">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-lg md:prose-xl max-w-none 
        font-sans text-off-white/90 leading-relaxed
        prose-headings:font-display prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight
        prose-h1:text-sun-yellow prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
        prose-h2:text-sun-yellow prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-steel-gray prose-h2:pb-2
        prose-h3:text-off-white prose-h3:text-2xl
        prose-p:mb-8
        prose-a:text-sun-orange prose-a:no-underline hover:prose-a:underline prose-a:font-bold
        prose-strong:text-off-white prose-strong:bg-steel-gray/50 prose-strong:px-1
        prose-blockquote:border-l-4 prose-blockquote:border-sun-yellow prose-blockquote:bg-steel-gray/20 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:font-mono prose-blockquote:text-base prose-blockquote:not-italic
        prose-ul:list-square prose-ul:pl-6 prose-li:mb-2
        prose-img:border prose-img:border-steel-gray prose-img:shadow-[4px_4px_0_var(--color-sun-yellow)] prose-img:my-10
        prose-code:text-sun-yellow prose-code:bg-jet-black prose-code:px-1 prose-code:border prose-code:border-steel-gray
      ">
        <MDXContent code={log.mdx} />
      </div>
      
      <footer className="mt-20 pt-10 border-t border-steel-gray flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="font-mono text-sm text-off-white/60">
           SYS_ADMIN: SUNNY ☀️ // END_OF_LOG
         </div>
         <a href="https://www.vestcodes.co" target="_blank" rel="noopener noreferrer" className="brutal-border px-6 py-3 bg-jet-black text-sun-yellow mono-accent font-bold hover:bg-steel-gray transition-colors">
           VISIT VESTCODES
         </a>
      </footer>
    </article>
  );
}
