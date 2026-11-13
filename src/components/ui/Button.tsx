import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean; // abre num novo separador (GitHub, LinkedIn...)
  download?: boolean; // descarrega o ficheiro (o CV)
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      download={download || undefined}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
