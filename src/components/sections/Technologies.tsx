import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/site";
import styles from "./Technologies.module.css";

export default function Technologies() {
  return (
    <section id="tecnologias" className={styles.section}>
      <SectionTitle
        eyebrow="Tecnologias"
        title="Com o que trabalho"
        text="Do front-end ao back-end, passando pelo mobile e pelas bases de dados."
      />

      <ul className={styles.grid}>
        {skills.map(({ name, icon: Icon, color, level, label }) => (
          <li key={name} className={styles.skill}>
            <div className={styles.header}>
              <span className={styles.name}>
                <Icon className={styles.icon} style={{ color }} aria-hidden="true" />
                {name}
              </span>
              <span className={styles.label}>{label}</span>
            </div>

            <div
              className={styles.track}
              role="progressbar"
              aria-label={`Nível em ${name}`}
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuetext={label}
            >
              <div className={styles.fill} style={{ width: `${level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}