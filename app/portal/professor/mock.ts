// app/portal/professor/mock.ts
import { BarChart3, Calendar, Users, UploadCloud } from "lucide-react"

export const PROFESSOR = {
  name: "Profa. Mariana Lopes",
  matricula: "PRF-2026-001",
  department: "Hospitalidade & Luxo",
}

export const KPI = [
  {
    label: "Turmas Ativas",
    value: "4",
    helper: "Semestre 2/2026",
    tone: "blue" as const,
    icon: Users,
  },
  {
    label: "Aulas Hoje",
    value: "2",
    helper: "Agenda confirmada",
    tone: "amber" as const,
    icon: Calendar,
  },
  {
    label: "Média das Turmas",
    value: "8.4",
    helper: "+0.2 este mês",
    tone: "green" as const,
    icon: BarChart3,
  },
]

export const TODAY_CLASSES = [
  {
    id: "a1",
    courseId: "c1",
    course: "Gestão de Concierge de Luxo",
    classGroup: "Turma A",
    time: "14:00",
    room: "Sala 12",
    students: 28,
    status: "Confirmada",
  },
  {
    id: "a2",
    courseId: "c2",
    course: "Etiqueta e Protocolo Internacional",
    classGroup: "Turma B",
    time: "18:30",
    room: "Sala 08",
    students: 22,
    status: "Agendada",
  },
]

export const NOTICES = [
  { id: 1, title: "3 alunos enviaram atividades pendentes", when: "1h atrás" },
  { id: 2, title: "Novo material aprovado para a turma B", when: "6h atrás" },
]

export const COURSES = [
  {
    id: "c1",
    code: "GE-201",
    name: "Gestão de Concierge de Luxo",
    group: "Turma A",
    students: 28,
    nextClass: "Hoje, 14:00",
  },
  {
    id: "c2",
    code: "ET-114",
    name: "Etiqueta e Protocolo Internacional",
    group: "Turma B",
    students: 22,
    nextClass: "Hoje, 18:30",
  },
  {
    id: "c3",
    code: "IN-101",
    name: "Inglês para Hospitalidade",
    group: "Turma A",
    students: 30,
    nextClass: "Qua, 08:00",
  },
]

export type StudentRow = {
  id: string
  name: string
  matricula: string
  grade1?: number
  grade2?: number
  attendance?: number
}

export const STUDENTS_BY_COURSE: Record<string, StudentRow[]> = {
  c1: [
    { id: "s1", name: "João Silva", matricula: "2026001", grade1: 9.0, grade2: 8.8, attendance: 96 },
    { id: "s2", name: "Ana Paula", matricula: "2026002", grade1: 8.2, grade2: 8.4, attendance: 92 },
    { id: "s3", name: "Bruno Lima", matricula: "2026003", grade1: 7.5, grade2: 8.1, attendance: 88 },
  ],
  c2: [
    { id: "s4", name: "Camila Souza", matricula: "2026012", grade1: 8.0, grade2: 8.5, attendance: 90 },
    { id: "s5", name: "Diego Martins", matricula: "2026018", grade1: 7.8, grade2: 8.0, attendance: 86 },
  ],
  c3: [
    { id: "s6", name: "Fernanda Ribeiro", matricula: "2026024", grade1: 8.9, grade2: 9.2, attendance: 97 },
  ],
}

export const MATERIAL_UPLOAD_BUCKETS = [
  {
    id: "u1",
    courseId: "c1",
    course: "Gestão de Concierge de Luxo",
    files: [
      { id: "f1", name: "Aula 05 — Padrões de excelência.pdf", type: "PDF", size: "2.4 MB", updated: "Hoje" },
      { id: "f2", name: "Checklist — Recepção VIP.docx", type: "DOC", size: "380 KB", updated: "Ontem" },
    ],
  },
  {
    id: "u2",
    courseId: "c2",
    course: "Etiqueta e Protocolo Internacional",
    files: [
      { id: "f3", name: "Slides — Cerimonial.pptx", type: "PPT", size: "4.1 MB", updated: "5 dias" },
    ],
  },
]

export const QUICK_ACTIONS = [
  { id: "qa1", label: "Enviar material", icon: UploadCloud, href: "/portal/professor/upload" },
]
