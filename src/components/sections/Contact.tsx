"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { ArrowUpRight, Check, Clock, Copy, MapPin, Send } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import SectionTitle from "../ui/SectionTitle";
import { contacts, site } from "../../data/site";
import styles from "./Contact.module.css";

const subjects = ["Proposta de emprego ou estágio", "Projeto freelance", "Outro assunto"];
const MAX_CHARS = 500;

const channels = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: contacts.whatsapp,
    href: contacts.whatsappLink,
    color: "#25D366",
  },
  {
    icon: FaEnvelope,
    label: "E-mail",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    color: "#A78BFA",
    copy: contacts.email,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "in/faife-antonio-faife",
    href: contacts.linkedin,
    color: "#4C9EEB",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "FaifeAntonio5",
    href: contacts.github,
    color: "#F4F2FF",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Texto que vai para o WhatsApp ou para o e-mail
  const buildText = () => `Olá Faife! Sou ${name}.\nAssunto: ${subject}\n\n${message}`;

  function sendWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(
      `${contacts.whatsappLink}?text=${encodeURIComponent(buildText())}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function sendEmail() {
    const form = document.getElementById("form-contacto") as HTMLFormElement | null;
    if (form && !form.reportValidity()) return; // mostra os avisos de campo obrigatório
    const subjectLine = encodeURIComponent(`${subject} — ${name}`);
    window.location.href = `mailto:${contacts.email}?subject=${subjectLine}&body=${encodeURIComponent(buildText())}`;
  }

  async function copyEmail(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem permissão para copiar: não faz nada
    }
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        {/* ───── Lado esquerdo: texto e canais ───── */}
        <div className={styles.info}>
          <SectionTitle
            eyebrow="Contacto"
            title="Vamos trabalhar juntos?"
            text="Tem um projeto, uma vaga ou uma ideia? Escolha o canal que preferir ou envie-me uma mensagem pelo formulário."
            align="left"
          />

          <div className={styles.badges}>
            <span className={styles.badge}>
              <Clock size={16} aria-hidden="true" />
              Respondo normalmente no mesmo dia
            </span>
            <span className={styles.badge}>
              <MapPin size={16} aria-hidden="true" />
              {site.location} · Remoto
            </span>
          </div>

          <ul className={styles.channels}>
            {channels.map(({ icon: Icon, label, value, href, color, copy }) => {
              const isExternal = href.startsWith("http");
              return (
                <li
                  key={label}
                  className={styles.channel}
                  style={{ "--brand": color } as CSSProperties}
                >
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={styles.channelLink}
                  >
                    <span className={styles.channelIcon}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className={styles.channelText}>
                      <span className={styles.channelLabel}>{label}</span>
                      <span className={styles.channelValue}>{value}</span>
                    </span>
                    <ArrowUpRight size={18} className={styles.channelArrow} aria-hidden="true" />
                  </a>

                  {copy && (
                    <button
                      type="button"
                      onClick={() => copyEmail(copy)}
                      className={styles.copyButton}
                      aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ───── Lado direito: formulário ───── */}
        <div className={styles.formWrapper}>
          <div aria-hidden="true" className={styles.glow} />

          <form id="form-contacto" onSubmit={sendWhatsApp} className={styles.form}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Envie uma mensagem</h3>
              <p className={styles.formSubtitle}>Leva menos de um minuto.</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="O seu nome"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="assunto" className={styles.label}>
                Assunto
              </label>
              <select
                id="assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${styles.input} ${styles.select}`}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label htmlFor="mensagem" className={styles.label}>
                  Mensagem
                </label>
                <span className={styles.counter} aria-live="polite">
                  {message.length}/{MAX_CHARS}
                </span>
              </div>
              <textarea
                id="mensagem"
                required
                rows={5}
                maxLength={MAX_CHARS}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte-me um pouco sobre o seu projeto ou vaga"
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.submit}>
                <FaWhatsapp size={18} aria-hidden="true" />
                Enviar pelo WhatsApp
              </button>
              <button type="button" onClick={sendEmail} className={styles.secondary}>
                <Send size={16} aria-hidden="true" />
                Enviar por e-mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}