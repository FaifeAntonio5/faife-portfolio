import {
  Monitor,
  Smartphone,
  Database,
  Code,
  Wrench,
  Network,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiOpenjdk,
  SiSpringboot,
  SiNestjs,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
} from "react-icons/si";

// ───────── Informações pessoais ─────────
export const site = {
  name: "Faife Antonio Faife",
  shortName: "Faife",
  role: "Full Stack Developer · Web & Mobile",
  location: "Beira, Moçambique",
  headline: "Crio aplicações web e mobile que resolvem problemas reais.",
  intro:
    "Desenvolvedor full stack e estudante do 4.º ano de Engenharia Informática na Universidade Zambeze, na Beira. Trabalho com React, Next.js e React Native no front-end, e com Spring Boot e NestJS no back-end.",
  availability: "Disponível para estágio e projetos",
  photo: "/images/foto.png",
  cv: "/cv/Faife-CV.pdf",
};

// ───────── Contactos ─────────
export const contacts = {
  whatsapp: "+258 87 326 9379",
  whatsappLink: "https://wa.me/258873269379",
  email: "faifeantonio749@gmail.com",
  linkedin: "https://www.linkedin.com/in/faife-antonio-faife",
  github: "https://github.com/FaifeAntonio5",
};

// ───────── Menu ─────────
export const navLinks = [
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

// ───────── Tecnologias (barras de nível) ─────────
// level = largura da barra (0–100) · label = texto à direita ("Avançado", "85%"...)
export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  level: number;
  label: string;
};

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB", level: 85, label: "Avançado" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 70, label: "Intermédio" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75, label: "Intermédio" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85, label: "Avançado" },
  { name: "React Native", icon: SiReact, color: "#61DAFB", level: 75, label: "Intermédio" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", level: 55, label: "Intermédio" },
  { name: "Java", icon: SiOpenjdk, color: "#F89820", level: 80, label: "Avançado" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 80, label: "Avançado" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: 70, label: "Intermédio" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: 55, label: "Intermédio" },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 50, label: "Intermédio" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#5B8DEF", level: 75, label: "Intermédio" },
  { name: "MySQL", icon: SiMysql, color: "#4FA3D1", level: 70, label: "Intermédio" },
  { name: "Prisma", icon: SiPrisma, color: "#FFFFFF", level: 60, label: "Intermédio" },
  { name: "Git", icon: SiGit, color: "#F05032", level: 80, label: "Avançado" },
];

export const heroTech = ["React", "Next.js", "TypeScript", "Spring Boot", "NestJS"];

// ───────── Serviços ─────────
export type Service = { icon: LucideIcon; title: string; text: string };

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Sites e lojas online",
    text: "Sites rápidos e responsivos para negócios, com catálogo de produtos, formulário de contacto e ligação direta ao WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Aplicações mobile",
    text: "Apps para Android e iPhone com React Native, com login, notificações e chat em tempo real.",
  },
  {
    icon: Database,
    title: "Sistemas de gestão à medida",
    text: "Sistemas web para escolas, empresas e instituições: presenças, registos, relatórios e controlo de acessos.",
  },
  {
    icon: Code,
    title: "APIs e integrações",
    text: "APIs REST seguras com Spring Boot ou NestJS, autenticação JWT e integração com outros serviços, incluindo pagamentos como o M-Pesa.",
  },
  {
    icon: Wrench,
    title: "Manutenção e melhorias",
    text: "Correção de erros, novas funcionalidades e modernização de sites e sistemas que já existem.",
  },
  {
    icon: Network,
    title: "Redes para pequenos escritórios",
    text: "Planeamento e configuração de redes locais e Wi-Fi para pequenos escritórios, com segmentação e regras de acesso.",
  },
];

// ───────── Como trabalho ─────────
export const steps = [
  { n: "01", title: "Conversa", text: "Percebo o seu negócio, o problema e o que precisa." },
  { n: "02", title: "Proposta", text: "Envio o plano, o prazo e o orçamento, sem surpresas." },
  { n: "03", title: "Desenvolvimento", text: "Construo por etapas e mostro o progresso regularmente." },
  { n: "04", title: "Entrega e apoio", text: "Publico, explico como usar e continuo disponível para ajustes." },
];

// ───────── Sobre mim ─────────
export const about = {
  title: "Da Beira para o mundo, uma linha de código de cada vez.",
  paragraphs: [
    "Sou estudante do 4.º ano de Engenharia Informática na Universidade Zambeze e trabalho como freelancer desde 2023. Gosto de transformar problemas do dia a dia em aplicações simples de usar, do levantamento de requisitos à publicação.",
    "Além do desenvolvimento, estudo redes de computadores, para perceber como as aplicações funcionam de ponta a ponta.",
  ],
};

export const timeline = [
  { year: "2022", text: "Concluí a 12.ª classe na Escola Secundária Samora Moisés Machel" },
  { year: "2023", text: "Entrei em Engenharia Informática e comecei a trabalhar como freelancer" },
  { year: "[ANO]", text: "App de Transporte Partilhado na Jornada Científica da UniZambeze" },
  { year: "2026", text: "Sistema de Assiduidade Docente e desenvolvimento do FazAi" },
];

export const facts = [
  {
    title: "Formação",
    lines: ["Licenciatura em Engenharia Informática", "Universidade Zambeze · 2023 – [ANO]"],
  },
  {
    title: "Línguas",
    lines: ["Português (nativo)", "Inglês (fluente)", "Ndau (básico)"],
  },
  {
    title: "Qualidades",
    lines: ["Trabalho em equipa e comunicação", "Autodidata", "Pontualidade e ética profissional"],
  },
];