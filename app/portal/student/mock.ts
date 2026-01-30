import { BarChart3, BookOpen, Calendar } from "lucide-react"

export const STUDENT = {
  name: "João Silva",
  matricula: "2026001",
}

export const KPI = [
  {
    label: "Média Geral",
    value: "8.7",
    helper: "+0.5 este mês",
    tone: "blue" as const,
    icon: BarChart3,
  },
  {
    label: "Frequência",
    value: "94%",
    helper: "Regular",
    tone: "amber" as const,
    icon: Calendar,
  },
  {
    label: "Disciplinas",
    value: "6",
    helper: "Semestre 2/2026",
    tone: "green" as const,
    icon: BookOpen,
  },
]

export const CLASSES = [
  { id: 1, initials: "GE", name: "Gestão de Concierge de Luxo", time: "Seg, 14:00", room: "Sala 12" },
  { id: 2, initials: "ET", name: "Etiqueta e Protocolo Internacional", time: "Ter, 10:00", room: "Sala 08" },
  { id: 3, initials: "IN", name: "Inglês para Hospitalidade", time: "Qua, 08:00", room: "Sala 03" },
]

export const NOTICES = [
  { id: 1, title: "Nota da avaliação de Etiqueta lançada", when: "2h atrás" },
  { id: 2, title: "Aula de Gestão de amanhã foi confirmada", when: "5h atrás" },
]

export const COURSES = [
  {
    id: 1,
    code: "GE-201",
    name: "Gestão de Concierge de Luxo",
    professor: "Profa. Mariana Lopes",
    status: "Em andamento",
    progress: 62,
    nextClass: "Seg, 14:00",
  },
  {
    id: 2,
    code: "ET-114",
    name: "Etiqueta e Protocolo Internacional",
    professor: "Prof. Eduardo Azevedo",
    status: "Em andamento",
    progress: 48,
    nextClass: "Ter, 10:00",
  },
  {
    id: 3,
    code: "IN-101",
    name: "Inglês para Hospitalidade",
    professor: "Prof. Henry Santos",
    status: "Em andamento",
    progress: 31,
    nextClass: "Qua, 08:00",
  },
]

export const GRADES = [
  {
    id: 1,
    course: "Gestão de Concierge de Luxo",
    average: 8.9,
    attendance: 96,
    items: [
      { label: "Prova 1", value: 9.0, weight: "30%" },
      { label: "Trabalho", value: 8.6, weight: "20%" },
      { label: "Prova 2", value: 9.1, weight: "50%" },
    ],
  },
  {
    id: 2,
    course: "Etiqueta e Protocolo Internacional",
    average: 8.2,
    attendance: 92,
    items: [
      { label: "Avaliação", value: 8.0, weight: "40%" },
      { label: "Seminário", value: 8.5, weight: "30%" },
      { label: "Atividades", value: 8.1, weight: "30%" },
    ],
  },
]

export const MATERIALS = [
  {
    id: 1,
    course: "Gestão de Concierge de Luxo",
    files: [
      { id: "a", name: "Aula 05 — Padrões de excelência.pdf", type: "PDF", size: "2.4 MB", updated: "Hoje" },
      { id: "b", name: "Checklist — Recepção VIP.docx", type: "DOC", size: "380 KB", updated: "Ontem" },
    ],
  },
  {
    id: 2,
    course: "Etiqueta e Protocolo Internacional",
    files: [
      { id: "c", name: "Guia de etiqueta — versão 2.pdf", type: "PDF", size: "1.9 MB", updated: "2 dias" },
      { id: "d", name: "Slides — Cerimonial.pptx", type: "PPT", size: "4.1 MB", updated: "5 dias" },
    ],
  },
]

export const LIVE_SESSIONS = [
  {
    id: 1,
    title: "Aula ao vivo — Gestão de Concierge",
    date: "Hoje",
    time: "14:00",
    teacher: "Profa. Mariana Lopes",
    status: "Ao vivo às 14:00",
  },
  {
    id: 2,
    title: "Plantão de dúvidas — Etiqueta",
    date: "Amanhã",
    time: "18:30",
    teacher: "Prof. Eduardo Azevedo",
    status: "Agendado",
  },
]
