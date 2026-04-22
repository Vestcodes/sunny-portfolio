import { allLogs } from "content-collections";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return allLogs.map((log) => ({
    slug: log.slug,
  }));
}

export default async function LogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const log = allLogs.find((l) => l.slug === resolvedParams.slug);

  if (!log) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
        <div dangerouslySetInnerHTML={{ __html: log.mdx }} />
      </div>
    </article>
  );
}
