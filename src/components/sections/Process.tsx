import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { steps, contacts } from "../../data/site";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="processo" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle eyebrow="Como trabalho" title="Da ideia ao lançamento" />

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.number}>{step.n}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.actions}>
          <Button href="#contacto">Pedir um orçamento</Button>
          <Button href={contacts.github} variant="outline" external>
            Ver projetos no GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
