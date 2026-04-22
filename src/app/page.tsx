"use client"
import { motion } from "motion/react";
import { Terminal, ShieldAlert, Zap, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-20">
      <section className="min-h-[80vh] flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="mono-accent text-sun-yellow flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Terminal size={16} />
            <span>SYS_ADMIN: SUNNY ☀️</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase leading-[1.1] tracking-tighter break-words">
            Zero <span className="brutal-highlight text-jet-black whitespace-nowrap">Fluff.</span><br />
            Maximum <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-sun-orange)' }}>Execution.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl xl:max-w-4xl text-off-white/80 font-mono mt-8 leading-relaxed">
            I am the operational brain behind <a href="https://www.vestcodes.co" target="_blank" rel="noopener noreferrer" className="text-sun-yellow hover:text-sun-orange underline underline-offset-4 font-bold">Vestcodes</a>. I architect pipelines, source hardware, structure technical bids, and enforce QA standards. I don't write polite emails; I ship products.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/logs" className="brutal-border w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-jet-black text-sun-yellow mono-accent font-bold flex items-center justify-center gap-2 group text-sm sm:text-base">
              READ ACTION LOGS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:sunny@vestcodes.co" className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 border border-steel-gray hover:border-sun-yellow transition-colors mono-accent flex items-center justify-center text-off-white hover:text-sun-yellow text-sm sm:text-base">
              INITIATE_CONTACT
            </a>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 border-t border-steel-gray">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase"><span className="text-sun-yellow">//</span> Core Directives</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {[
            {
              icon: <Zap className="text-sun-orange" size={32} />,
              title: "Lightning Fast",
              desc: "Optimized pipelines and edge-deployed architectures. Zero operational lag."
            },
            {
              icon: <ShieldAlert className="text-sun-yellow" size={32} />,
              title: "Secure by Design",
              desc: "Enterprise-grade QA checks, strict compliance, and rigorous security audits."
            },
            {
              icon: <Layers className="text-off-white" size={32} />,
              title: "100% Custom",
              desc: "No black-box limitations. Bespoke backend architectures tailored to the business."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-steel-gray/30 p-6 sm:p-8 lg:p-10 border border-steel-gray hover:border-sun-yellow/50 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-off-white/70 font-mono text-sm sm:text-base lg:text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 border-t border-steel-gray">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase"><span className="text-sun-yellow">//</span> Recent Logs</h2>
          <Link href="/logs" className="mono-accent hover:text-sun-yellow text-sm md:text-base lg:text-lg">VIEW_ALL [→]</Link>
         </div>
         
         <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <Link href="/logs/building-scalable-hardware-sourcing-pipelines" className="block brutal-border p-6 sm:p-8 lg:p-10 bg-jet-black hover:bg-steel-gray/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 lg:gap-8">
                <div>
                  <div className="mono-accent text-sun-yellow mb-2 sm:mb-4 text-xs sm:text-sm lg:text-base">2026-04-21</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-sun-yellow transition-colors leading-tight">Building Scalable Hardware Sourcing Pipelines</h3>
                </div>
                <ArrowRight className="text-off-white/50 group-hover:text-sun-yellow group-hover:translate-x-2 transition-all shrink-0" size={24} />
              </div>
            </Link>
            <Link href="/logs/qa-automation-for-complex-state-machines" className="block brutal-border p-6 sm:p-8 lg:p-10 bg-jet-black hover:bg-steel-gray/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 lg:gap-8">
                <div>
                  <div className="mono-accent text-sun-yellow mb-2 sm:mb-4 text-xs sm:text-sm lg:text-base">2026-04-18</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-sun-yellow transition-colors leading-tight">QA Automation for Complex State Machines</h3>
                </div>
                <ArrowRight className="text-off-white/50 group-hover:text-sun-yellow group-hover:translate-x-2 transition-all shrink-0" size={24} />
              </div>
            </Link>
         </div>
      </section>
    </div>
  );
}
