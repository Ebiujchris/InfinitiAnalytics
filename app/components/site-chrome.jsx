"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "What we do", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "How we work", href: "/about#approach" },
  { label: "About", href: "/about" },
];

export function Brand({ footer = false }) {
  return (
    <Link className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="Infiniti Analytics home">
      <span className="brand-icon" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-wordmark">Infiniti<span>Analytics</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <div className="wrap announcement-inner">
          <span><i /> DIGITAL SYSTEMS. USEFUL INSIGHT. LASTING PROGRESS.</span>
          <Link href="/contact">Start a conversation <ArrowUpRight size={13} /></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner wrap">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div><Brand footer /><p>Practical technology.<br />Clearer decisions.</p></div>
          <div className="footer-nav">
            <span>EXPLORE</span>
            <Link href="/services">What we do</Link>
            <Link href="/work">Our work</Link>
            <Link href="/about#approach">How we work</Link>
            <Link href="/about">About us</Link>
          </div>
          <div className="footer-nav">
            <span>GET IN TOUCH</span>
            <Link href="mailto:info@infinitianalytics.com">info@infinitianalytics.com</Link>
            <Link href="tel:+256774725437">+256 774 725 437</Link>
          </div>
          <Link className="back-to-top" href="/" aria-label="Back to top"><ArrowUpRight size={18} /></Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Infiniti Analytics. All rights reserved.</span>
          <span>Technology for meaningful progress.</span>
        </div>
      </div>
    </footer>
  );
}
