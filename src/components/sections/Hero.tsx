import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import { site, contacts, heroTech } from "../../data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      {/* Texto */}
      <div className={styles.content}>
        <span className={styles.badge}>{site.role}</span>

        <h1 className={styles.title}>
          Olá, sou o <span className={styles.highlight}>{site.shortName}</span>.
          <br />
          {site.headline}
        </h1>

        <p className={styles.intro}>{site.intro}</p>

        <div className={styles.actions}>
          <Button href={contacts.github} external>
            Ver projetos no GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#contacto" variant="outline">
            Contratar-me
          </Button>
        </div>

        <div className={styles.techRow}>
          <span className={styles.techLabel}>Trabalho com</span>
          {heroTech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Foto */}
      <div className={styles.photoColumn}>
        <div className={styles.photoWrapper}>
          <div aria-hidden="true" className={styles.glow} />

          {/* Linhas decorativas (como no template 1) */}
          <svg aria-hidden="true" className={styles.lines} viewBox="0 0 400 500" fill="none">
            <path d="M-20 120 C 120 40, 220 260, 420 140" />
            <path d="M-10 420 C 140 300, 260 520, 410 380" />
          </svg>

          <div className={styles.frame}>
            <div className={styles.capsule}>
              <Image
                src={site.photo}
                alt={`Fotografia de ${site.name}`}
                fill
                priority
                sizes="(min-width: 768px) 320px, 256px"
                className={styles.photo}
              />
            </div>
          </div>
        </div>

        <span className={styles.status}>
          <span className={styles.dot}>
            <span className={styles.dotPing} />
            <span className={styles.dotCore} />
          </span>
          {site.availability}
        </span>
      </div>
    </section>
  );
}