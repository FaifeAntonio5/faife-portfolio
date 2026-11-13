import { site, contacts } from "../../data/site";
import styles from "./Footer.module.css";

const socials = [
  { label: "GitHub", href: contacts.github },
  { label: "LinkedIn", href: contacts.linkedin },
  { label: "WhatsApp", href: contacts.whatsappLink },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © 2026 {site.name} · {site.location}
        </p>
        <div className={styles.links}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
