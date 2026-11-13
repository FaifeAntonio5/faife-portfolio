import { Download } from "lucide-react";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { about, timeline, facts, site } from "../../data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.columns}>
        {/* Texto */}
        <div className={styles.content}>
          <SectionTitle eyebrow="Sobre mim" title={about.title} align="left" />

          {about.paragraphs.map((p) => (
            <p key={p} className={styles.paragraph}>
              {p}
            </p>
          ))}

          <div>
            <Button href={site.cv} download>
              <Download size={18} aria-hidden="true" />
              Descarregar CV
            </Button>
          </div>
        </div>

        {/* Linha do tempo */}
        <div className={styles.timelineCard}>
          <h3 className={styles.timelineTitle}>O meu percurso</h3>

          <ol className={styles.timeline}>
            {timeline.map((item) => (
              <li key={item.year + item.text} className={styles.timelineItem}>
                <span aria-hidden="true" className={styles.timelineDot} />
                <p className={styles.year}>{item.year}</p>
                <p className={styles.timelineText}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Bloco roxo: formação, línguas, qualidades */}
      <div className={styles.facts}>
        {facts.map((fact) => (
          <div key={fact.title} className={styles.fact}>
            <h3 className={styles.factTitle}>{fact.title}</h3>
            <ul className={styles.factList}>
              {fact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
