import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow: string; // o texto pequeno em cima, ex.: "SERVIÇOS"
  title: string;
  text?: string;
  align?: "center" | "left";
};

export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
