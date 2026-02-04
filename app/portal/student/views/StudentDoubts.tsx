//app\portal\student\views\StudentDoubts.tsx
"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import {
  MessageSquare,
  Plus,
  Search,
  Send,
  Users,
  GraduationCap,
  ArrowLeft,
} from "lucide-react"

const CURRENT_USER = { id: "stu_1", name: "João Silva", role: "STUDENT" as const }

const COURSES = [
  { id: "c1", name: "Gestão de Concierge de Luxo" },
  { id: "c2", name: "Etiqueta e Protocolo Internacional" },
  { id: "c3", name: "Inglês para Hospitalidade" },
]

const PROFESSORS_BY_COURSE: Record<string, { id: string; name: string }[]> = {
  c1: [{ id: "p1", name: "Profa. Mariana Lopes" }],
  c2: [{ id: "p2", name: "Prof. Eduardo Azevedo" }],
  c3: [{ id: "p3", name: "Prof. Henry Santos" }],
}

const CLASSMATES_BY_COURSE: Record<string, { id: string; name: string }[]> = {
  c1: [
    { id: "s2", name: "Ana Paula" },
    { id: "s3", name: "Bruno Lima" },
  ],
  c2: [
    { id: "s4", name: "Camila Souza" },
    { id: "s5", name: "Diego Martins" },
  ],
  c3: [{ id: "s6", name: "Fernanda Ribeiro" }],
}

type Participant = { id: string; name: string; role: "STUDENT" | "PROFESSOR" }
type Message = { id: string; text: string; sender: Participant; createdAt: string }
type Thread = {
  id: string
  subject: string
  courseId: string
  courseName: string
  participants: Participant[]
  lastMessageAt: string
  messages: Message[]
}

function formatTime(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
  } catch {
    return iso
  }
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(query)
    const onChange = () => setMatches(m.matches)
    onChange()
    m.addEventListener?.("change", onChange)
    return () => m.removeEventListener?.("change", onChange)
  }, [query])
  return matches
}

export default function StudentDoubts() {
  const isDesktop = useMediaQuery("(min-width: 1024px)") // lg

  const [threads, setThreads] = useState<Thread[]>(() => [
    {
      id: "t1",
      subject: "Dúvida sobre critérios da Prova 1",
      courseId: "c2",
      courseName: "Etiqueta e Protocolo Internacional",
      participants: [
        { id: CURRENT_USER.id, name: CURRENT_USER.name, role: "STUDENT" },
        { id: "p2", name: "Prof. Eduardo Azevedo", role: "PROFESSOR" },
      ],
      lastMessageAt: new Date().toISOString(),
      messages: [
        {
          id: "m1",
          text: "Professor, quais tópicos vão cair na Prova 1?",
          sender: { id: CURRENT_USER.id, name: CURRENT_USER.name, role: "STUDENT" },
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        },
        {
          id: "m2",
          text: "Cai principalmente protocolo, tratamento e ordem de precedência. Releia as aulas 2 a 4.",
          sender: { id: "p2", name: "Prof. Eduardo Azevedo", role: "PROFESSOR" },
          createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        },
      ],
    },
  ])

  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string>(() => threads[0]?.id ?? "")
  const selected = useMemo(() => threads.find((t) => t.id === selectedId), [threads, selectedId])

  // Mobile: controla qual tela está aberta
  const [mobileScreen, setMobileScreen] = useState<"inbox" | "thread">("inbox")

  // Resposta
  const [draft, setDraft] = useState("")

  // Modal
  const [openNew, setOpenNew] = useState(false)
  const [newCourseId, setNewCourseId] = useState<string>(COURSES[0]?.id ?? "")
  const [newTarget, setNewTarget] = useState<"PROFESSOR" | "COLEGAS">("PROFESSOR")
  const [newRecipientId, setNewRecipientId] = useState<string>("")
  const [newSubject, setNewSubject] = useState("")
  const [newText, setNewText] = useState("")

  const filteredThreads = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return threads
    return threads.filter((t) => {
      return (
        t.subject.toLowerCase().includes(q) ||
        t.courseName.toLowerCase().includes(q) ||
        t.participants.some((p) => p.name.toLowerCase().includes(q))
      )
    })
  }, [threads, query])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!selectedId && threads.length) setSelectedId(threads[0].id)
  }, [threads, selectedId])

  // Quando vira desktop, mostra tudo
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isDesktop) setMobileScreen("inbox")
  }, [isDesktop])

  function openThread(id: string) {
    setSelectedId(id)
    if (!isDesktop) setMobileScreen("thread")
  }

  function sendReply() {
    if (!selected) return
    const text = draft.trim()
    if (!text) return

    const msg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: { id: CURRENT_USER.id, name: CURRENT_USER.name, role: "STUDENT" },
      createdAt: new Date().toISOString(),
    }

    setThreads((prev) =>
      prev.map((t) =>
        t.id === selected.id
          ? { ...t, lastMessageAt: msg.createdAt, messages: [...t.messages, msg] }
          : t
      )
    )
    setDraft("")
  }

  function createThread() {
    const subject = newSubject.trim()
    const text = newText.trim()
    if (!subject || !text) return

    const course = COURSES.find((c) => c.id === newCourseId)
    if (!course) return

    const participants: Participant[] = [
      { id: CURRENT_USER.id, name: CURRENT_USER.name, role: "STUDENT" },
    ]

    if (newTarget === "PROFESSOR") {
      const profs = PROFESSORS_BY_COURSE[newCourseId] ?? []
      const prof = profs.find((p) => p.id === newRecipientId) ?? profs[0]
      if (prof) participants.push({ id: prof.id, name: prof.name, role: "PROFESSOR" })
    } else {
      const mates = CLASSMATES_BY_COURSE[newCourseId] ?? []
      const mate = mates.find((m) => m.id === newRecipientId) ?? mates[0]
      if (mate) participants.push({ id: mate.id, name: mate.name, role: "STUDENT" })
    }

    const now = new Date().toISOString()
    const firstMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: { id: CURRENT_USER.id, name: CURRENT_USER.name, role: "STUDENT" },
      createdAt: now,
    }

    const thread: Thread = {
      id: crypto.randomUUID(),
      subject,
      courseId: course.id,
      courseName: course.name,
      participants,
      lastMessageAt: now,
      messages: [firstMsg],
    }

    setThreads((prev) => [thread, ...prev])
    setSelectedId(thread.id)

    setOpenNew(false)
    setNewSubject("")
    setNewText("")
    setNewRecipientId("")
    setNewTarget("PROFESSOR")

    if (!isDesktop) setMobileScreen("thread")
  }

  const recipients = useMemo(() => {
    if (newTarget === "PROFESSOR") return PROFESSORS_BY_COURSE[newCourseId] ?? []
    return CLASSMATES_BY_COURSE[newCourseId] ?? []
  }, [newCourseId, newTarget])

  // ------- COMPONENTES VISUAIS -------
  const Inbox = (
    <Card className="p-4 bg-white shadow-sm border rounded-2xl w-full">
      <div className="flex items-center gap-2 p-2 border rounded-xl w-full">
        <Search className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por assunto, disciplina, pessoa..."
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>

      <div className="mt-4 space-y-2">
        {filteredThreads.map((t) => {
          const active = t.id === selectedId
          const otherNames = t.participants
            .filter((p) => p.id !== CURRENT_USER.id)
            .map((p) => p.name)
            .join(", ")

          return (
            <button
              key={t.id}
              type="button"
              onClick={() => openThread(t.id)}
              className={[
                "w-full text-left p-3 rounded-2xl border transition",
                "min-w-0", // ✅ evita overflow
                active ? "border-[#2D74B2] bg-[#2D74B2]/5" : "hover:bg-slate-50",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900 truncate">{t.subject}</div>
                  <div className="text-xs text-slate-500 mt-1 truncate">
                    {t.courseName} • {otherNames}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 whitespace-nowrap">
                  {formatTime(t.lastMessageAt)}
                </div>
              </div>
            </button>
          )
        })}

        {!filteredThreads.length && (
          <div className="text-sm text-slate-500 p-3">Nenhuma conversa encontrada.</div>
        )}
      </div>
    </Card>
  )

  const ThreadView = (
    <Card className="p-0 bg-white shadow-sm border rounded-2xl overflow-hidden w-full min-w-0">
      {!selected ? (
        <div className="p-6 text-sm text-slate-500">
          Selecione uma conversa ou crie uma nova dúvida.
        </div>
      ) : (
        <div className="flex flex-col h-[72vh] min-h-[520px]">
          {/* Header thread */}
          <div className="p-4 sm:p-5 border-b">
            <div className="flex items-start justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {!isDesktop && (
                    <button
                      type="button"
                      onClick={() => setMobileScreen("inbox")}
                      className="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-100 shrink-0"
                      aria-label="Voltar"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}

                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      {selected.subject}
                    </div>
                    <div className="text-sm text-slate-500 mt-1 truncate">
                      {selected.courseName}
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-xs text-slate-500 flex items-center gap-2 min-w-0">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {selected.participants
                      .filter((p) => p.id !== CURRENT_USER.id)
                      .map((p) => p.name)
                      .join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 sm:p-5 space-y-3 overflow-auto bg-[#F4F6F8]">
            {selected.messages.map((m) => {
              const mine = m.sender.id === CURRENT_USER.id
              return (
                <div
                  key={m.id}
                  className={[
                    "w-full max-w-[760px] p-4 rounded-2xl border",
                    mine ? "ml-auto bg-white border-[#2D74B2]/30" : "mr-auto bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {m.sender.name}
                      <span className="text-xs text-slate-500 font-normal">
                        {" "}
                        {m.sender.role === "PROFESSOR" ? "(Professor)" : ""}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 whitespace-nowrap">
                      {formatTime(m.createdAt)}
                    </div>
                  </div>
                  <div className="text-sm text-slate-700 mt-2 whitespace-pre-wrap break-words">
                    {m.text}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reply */}
          <div className="p-4 border-t bg-white">
            <div className="flex flex-col sm:flex-row sm:items-end gap-3">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Responder..."
                className="w-full flex-1 min-h-[44px] max-h-[140px] resize-y p-3 border rounded-2xl outline-none text-sm"
              />
              <Button
                onClick={sendReply}
                className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90 w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  )

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-slate-900">Dúvidas</h2>
          <p className="text-sm text-slate-500 mt-1">
            Converse por disciplina com professores ou colegas (estilo e-mail interno).
          </p>
        </div>

        <Button
          className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90 w-full sm:w-auto"
          onClick={() => setOpenNew(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova dúvida
        </Button>
      </div>

      {/* Layout responsivo REAL */}
      {isDesktop ? (
        <div className="grid grid-cols-[360px_1fr] gap-6 w-full min-w-0">
          <div className="min-w-0">{Inbox}</div>
          <div className="min-w-0">{ThreadView}</div>
        </div>
      ) : (
        <div className="w-full min-w-0">
          {mobileScreen === "inbox" ? Inbox : ThreadView}
        </div>
      )}

      {/* Modal */}
      {openNew && (
        <div className="fixed inset-0 bg-black/40 z-50 p-4">
          <div className="h-full w-full grid place-items-center">
            <Card className="w-full max-w-[720px] bg-white shadow-xl border rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6 max-h-[90vh] overflow-auto">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-slate-900">Nova dúvida</div>
                    <div className="text-sm text-slate-500 mt-1">
                      Escolha a disciplina e o destinatário.
                    </div>
                  </div>
                  <button
                    className="text-slate-500 hover:text-slate-900"
                    onClick={() => setOpenNew(false)}
                    aria-label="Fechar"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-5 grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-2xl">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <GraduationCap className="w-4 h-4" />
                      Disciplina
                    </div>

                    <select
                      value={newCourseId}
                      onChange={(e) => {
                        setNewCourseId(e.target.value)
                        setNewRecipientId("")
                      }}
                      className="w-full mt-3 p-3 border rounded-xl outline-none text-sm"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="p-4 border rounded-2xl">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Users className="w-4 h-4" />
                      Enviar para
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setNewTarget("PROFESSOR")
                          setNewRecipientId("")
                        }}
                        className={[
                          "px-3 py-2 rounded-xl border text-sm font-semibold transition w-full sm:w-auto",
                          newTarget === "PROFESSOR"
                            ? "border-[#2D74B2] bg-[#2D74B2]/5 text-[#2D74B2]"
                            : "hover:bg-slate-50",
                        ].join(" ")}
                      >
                        Professor
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setNewTarget("COLEGAS")
                          setNewRecipientId("")
                        }}
                        className={[
                          "px-3 py-2 rounded-xl border text-sm font-semibold transition w-full sm:w-auto",
                          newTarget === "COLEGAS"
                            ? "border-[#2D74B2] bg-[#2D74B2]/5 text-[#2D74B2]"
                            : "hover:bg-slate-50",
                        ].join(" ")}
                      >
                        Colega
                      </button>
                    </div>

                    <select
                      value={newRecipientId}
                      onChange={(e) => setNewRecipientId(e.target.value)}
                      className="w-full mt-3 p-3 border rounded-xl outline-none text-sm"
                    >
                      <option value="">
                        {newTarget === "PROFESSOR" ? "Selecione o professor" : "Selecione o colega"}
                      </option>
                      {recipients.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>

                    <div className="text-xs text-slate-500 mt-2">
                      Dica: depois você pode permitir enviar para vários colegas (grupo).
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-900">Assunto</div>
                  <input
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    placeholder="Ex: Dúvida sobre a prova / atividade / material..."
                    className="w-full mt-2 p-3 border rounded-2xl outline-none text-sm"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-900">Mensagem</div>
                  <textarea
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Escreva sua dúvida aqui..."
                    className="w-full mt-2 min-h-[140px] p-3 border rounded-2xl outline-none text-sm"
                  />
                </div>

                <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                  <Button
                    variant="outline"
                    className="rounded-xl w-full sm:w-auto"
                    onClick={() => setOpenNew(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90 w-full sm:w-auto"
                    onClick={createThread}
                  >
                    Criar conversa
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
