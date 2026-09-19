"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["How We Work", "/about"],
  ["About", "/about"],
  ["Insights", "/#contact"],
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return <header className="nav">
    <a className="brand" href="#" onClick={() => setIsOpen(false)}>
      <Image src="/logo.png" alt="Atlantic Fortis" width={191} height={90} className="brandLogo" priority />
    </a>
    <nav aria-label="Primary navigation">
      {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
    </nav>
    <a className="navCta" href="#contact" onClick={() => setIsOpen(false)}>Request a Consultation <ArrowRight size={16} /></a>
    <button className="menuButton" type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={21} /> : <Menu size={21} />}
    </button>
    {isOpen && <div className="mobileMenu">
      {links.map(([label, href]) => <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>)}
      <a className="button dark" href="#contact" onClick={() => setIsOpen(false)}>Request a Consultation <ArrowRight size={16} /></a>
    </div>}
  </header>;
}