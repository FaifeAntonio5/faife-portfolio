"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { navLinks, contacts } from "../../data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav aria-label="Navegação principal" className={styles.nav}>
        {/* Logótipo */}
        <a href="#inicio" className={styles.logo}>
          &lt;/&gt; faife<span className={styles.logoAccent}>.dev</span>
        </a>

        {/* Links no computador */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Projetos ↗
            </a>
          </li>
        </ul>

        <div className={styles.desktopCta}>
          <Button href="#contacto">Contratar-me</Button>
        </div>

        {/* Botão do menu no telemóvel */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className={styles.menuButton}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu aberto no telemóvel */}
      {open && (
        <div id="menu-mobile" className={styles.mobileMenu}>
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close} className={styles.mobileLink}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileLink}
              >
                Projetos no GitHub ↗
              </a>
            </li>
            <li className={styles.mobileCtaItem}>
              <a href="#contacto" onClick={close} className={styles.mobileCta}>
                Contratar-me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
