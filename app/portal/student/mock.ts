//app\portal\student\mock.ts
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

export const LIBRARY_CATEGORIES = [
  { id: "cat1", name: "Hotelaria & Hospitalidade" },
  { id: "cat2", name: "Etiqueta & Protocolo" },
  { id: "cat3", name: "Gestão & Liderança" },
  { id: "cat4", name: "Inglês para Hotelaria" },
  { id: "cat5", name: "Turismo & Experiência" },
]

export const LIBRARY_BOOKS = [
  {
    id: "book1",
    title: "Excelência no Atendimento VIP",
    author: "UNICON Editorial",
    categoryId: "cat1",
    categoryName: "Hotelaria & Hospitalidade",
    format: "PDF",
    size: "3.2 MB",
    description: "Boas práticas e padrões para recepção, concierge e atendimento premium.",
    tags: ["Atendimento", "Luxo", "Padrões"],
  },
  {
    id: "book2",
    title: "Guia de Etiqueta e Cerimonial",
    author: "Instituto de Protocolo",
    categoryId: "cat2",
    categoryName: "Etiqueta & Protocolo",
    format: "PDF",
    size: "2.1 MB",
    description: "Regras essenciais de etiqueta social e corporativa + precedência e tratamentos.",
    tags: ["Etiqueta", "Cerimonial", "Protocolo"],
  },
  {
    id: "book3",
    title: "Liderança em Serviços de Alto Padrão",
    author: "Mariana Lopes",
    categoryId: "cat3",
    categoryName: "Gestão & Liderança",
    format: "EPUB",
    size: "1.4 MB",
    description: "Como coordenar equipes e manter consistência na entrega de serviços de luxo.",
    tags: ["Liderança", "Gestão", "Equipe"],
  },
  {
    id: "book4",
    title: "English for Hospitality — Basics",
    author: "Henry Santos",
    categoryId: "cat4",
    categoryName: "Inglês para Hotelaria",
    format: "PDF",
    size: "4.0 MB",
    description: "Vocabulário e diálogos para recepção, reservas, concierge e restaurante.",
    tags: ["Inglês", "Hospitality", "Diálogos"],
  },
  {
    id: "book5",
    title: "Roteiros e Experiências Inesquecíveis",
    author: "Eduardo Azevedo",
    categoryId: "cat5",
    categoryName: "Turismo & Experiência",
    format: "PDF",
    size: "2.8 MB",
    description: "Como desenhar experiências, roteiros e jornadas do cliente com alto valor percebido.",
    tags: ["Turismo", "Experiência", "Jornada"],
  },
  {
    id: "book6",
    title: "Checklist Profissional do Concierge",
    author: "UNICON Editorial",
    categoryId: "cat1",
    categoryName: "Hotelaria & Hospitalidade",
    format: "DOC",
    size: "420 KB",
    description: "Checklists práticos para plantão, reservas, emergências e solicitações especiais.",
    tags: ["Checklist", "Concierge", "Operação"],
  },
  {
    id: "book7",
    title: "Comunicação Elegante no Atendimento",
    author: "Equipe UNICON",
    categoryId: "cat2",
    categoryName: "Etiqueta & Protocolo",
    format: "PDF",
    size: "1.9 MB",
    description: "Frases, tom e postura para situações delicadas e atendimento com excelência.",
    tags: ["Comunicação", "Postura", "Etiqueta"],
  },
  {
    id: "book8",
    title: "Gestão de Tempo na Rotina de Hotel",
    author: "UNICON Editorial",
    categoryId: "cat3",
    categoryName: "Gestão & Liderança",
    format: "PDF",
    size: "2.0 MB",
    description: "Métodos simples para organizar tarefas e aumentar eficiência operacional.",
    tags: ["Produtividade", "Rotina", "Gestão"],
  },
]
