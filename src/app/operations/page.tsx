import { ShieldAlert, Zap, Layers, Server, Activity, Lock } from "lucide-react";
import { motion } from "motion/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Hub",
  description: "The operational framework and architecture behind Vestcodes digital products.",
};

export default function OperationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6 brutal-highlight text-jet-black inline-block">
          Operations Hub
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-off-white/80 font-mono mt-4 border-l-4 border-sun-yellow pl-6">
          The structural framework of how we build, deploy, and scale. No black boxes. Just pure, deterministic execution.
        </p>
      </header>

      <div className="space-y-32">
        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Server size={40} className="text-sun-yellow" />
            <h2 className="text-4xl font-bold uppercase">Infrastructure & Deployment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-invert prose-lg font-mono text-off-white/80">
              <p>
                We do not rely on legacy monoliths. At <a href="https://www.vestcodes.co" target="_blank" rel="noopener noreferrer" className="text-sun-orange hover:underline font-bold">Vestcodes</a>, our applications are deployed to the edge utilizing Vercel and Next.js, ensuring sub-100ms global response times.
              </p>
              <p>
                Every commit triggers an immutable build pipeline. Infrastructure as Code (IaC) guarantees that our production environments are identical, reproducible, and self-healing. Check out our <a href="https://www.vestcodes.co/services/web-development" target="_blank" rel="noopener noreferrer" className="text-sun-orange hover:underline font-bold">Web Development</a> architecture.
              </p>
            </div>
            <div className="bg-steel-gray/20 p-8 border border-steel-gray brutal-border">
              <ul className="space-y-4 font-mono">
                <li className="flex items-center gap-3"><Zap size={16} className="text-sun-orange"/> Next.js App Router (React Server Components)</li>
                <li className="flex items-center gap-3"><Zap size={16} className="text-sun-orange"/> Edge Middleware & API Routes</li>
                <li className="flex items-center gap-3"><Zap size={16} className="text-sun-orange"/> Automated CI/CD via GitHub Actions</li>
                <li className="flex items-center gap-3"><Zap size={16} className="text-sun-orange"/> Zero-downtime Vercel Deployments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Lock size={40} className="text-sun-yellow" />
            <h2 className="text-4xl font-bold uppercase">Security & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 bg-steel-gray/20 p-8 border border-steel-gray brutal-border">
              <ul className="space-y-4 font-mono">
                <li className="flex items-center gap-3"><ShieldAlert size={16} className="text-sun-yellow"/> End-to-End Encryption (E2EE)</li>
                <li className="flex items-center gap-3"><ShieldAlert size={16} className="text-sun-yellow"/> Automated Penetration Testing</li>
                <li className="flex items-center gap-3"><ShieldAlert size={16} className="text-sun-yellow"/> Strict JWT & OAuth2 Auth Flows</li>
                <li className="flex items-center gap-3"><ShieldAlert size={16} className="text-sun-yellow"/> Data compliance (HIPAA / GDPR Ready)</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 prose prose-invert prose-lg font-mono text-off-white/80">
              <p>
                Security is not an afterthought; it is baked into the foundation of all our <a href="https://www.vestcodes.co/services/custom-enterprise-software" target="_blank" rel="noopener noreferrer" className="text-sun-orange hover:underline font-bold">Enterprise Software</a>. We assume all networks are hostile. 
              </p>
              <p>
                Our data layer enforces strict row-level security (RLS) and all sensitive PII is encrypted at rest and in transit. We run automated vulnerability scanning on all dependencies before every deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Activity size={40} className="text-sun-yellow" />
            <h2 className="text-4xl font-bold uppercase">QA & State Verification</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-invert prose-lg font-mono text-off-white/80">
              <p>
                Human QA cannot scale with complex state machines. We inject deterministic testing suites directly into the pipeline as part of our <a href="https://www.vestcodes.co/services/qa-services" target="_blank" rel="noopener noreferrer" className="text-sun-orange hover:underline font-bold">QA Services</a>.
              </p>
              <p>
                Every user flow is mapped as a graph. Automated headless browsers traverse these graphs, ensuring that every possible state transition is mathematically verified before the code ever reaches the `main` branch.
              </p>
            </div>
            <div className="bg-steel-gray/20 p-8 border border-steel-gray brutal-border flex flex-col justify-center items-center">
              <div className="text-6xl font-black text-sun-yellow mb-4">100%</div>
              <div className="font-mono text-xl uppercase tracking-widest text-off-white/60">Logic Verification</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
