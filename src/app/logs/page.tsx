import { allLogs } from "content-collections";
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "Action Logs | Sunny.OS",
  description: "Operational execution logs.",
};

export default function LogsPage() {
  const sortedLogs = allLogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">Action_Logs</h1>
        <p className="font-mono text-off-white/70 text-lg">System execution history and operational debriefs.</p>
      </div>

      <div className="space-y-8">
        {sortedLogs.map((log) => (
          <Link key={log.slug} href={`/logs/${log.slug}`} className="block brutal-border bg-steel-gray/20 p-8 hover:bg-steel-gray/40 transition-colors group">
            <div className="mono-accent text-sun-yellow mb-4">{format(new Date(log.date), 'yyyy-MM-dd')}</div>
            <h2 className="text-3xl font-bold mb-4 group-hover:text-sun-yellow transition-colors">{log.title}</h2>
            <p className="font-mono text-off-white/80">{log.summary}</p>
            <div className="mt-6 flex gap-2">
              {log.tags.map(tag => (
                <span key={tag} className="text-xs font-mono bg-jet-black px-2 py-1 border border-steel-gray text-off-white/60 uppercase">
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
