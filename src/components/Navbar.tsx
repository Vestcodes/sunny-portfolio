"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full p-4 md:p-6 lg:px-8 flex justify-between items-center z-50 bg-jet-black/90 backdrop-blur-md border-b border-steel-gray">
        <Link href="/" className="font-display font-bold text-xl lg:text-2xl tracking-tight flex items-center gap-2 hover:text-sun-yellow transition-colors z-50">
          <span className="w-3 h-3 lg:w-4 lg:h-4 bg-sun-yellow rounded-full animate-pulse shadow-[0_0_10px_var(--color-sun-yellow)]"></span>
          SUNNY.OS
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-10 mono-accent text-sm lg:text-base">
          <Link href="/" className="hover:text-sun-yellow transition-colors">Terminal</Link>
          <Link href="/manifesto" className="hover:text-sun-yellow transition-colors">Manifesto</Link>
          <Link href="/operations" className="hover:text-sun-yellow transition-colors">Operations</Link>
          <Link href="/logs" className="hover:text-sun-yellow transition-colors">Action_Logs</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-sun-yellow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-jet-black/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 mono-accent text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-sun-yellow transition-colors brutal-highlight">Terminal</Link>
          <Link href="/manifesto" onClick={() => setIsOpen(false)} className="hover:text-sun-yellow transition-colors brutal-highlight">Manifesto</Link>
          <Link href="/operations" onClick={() => setIsOpen(false)} className="hover:text-sun-yellow transition-colors brutal-highlight">Operations</Link>
          <Link href="/logs" onClick={() => setIsOpen(false)} className="hover:text-sun-yellow transition-colors brutal-highlight">Action_Logs</Link>
        </div>
      )}
    </>
  );
}
