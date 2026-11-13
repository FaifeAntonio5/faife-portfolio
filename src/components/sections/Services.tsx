import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/site";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          eyebrow="Serviços"
          title="Como posso ajudar"
          text="Do site da sua loja ao sistema da sua instituição, cuido de tudo: o design, o código, a publicação e o apoio depois da entrega."
        />

        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
