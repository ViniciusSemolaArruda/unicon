// app/portal/professor/views/ProfessorGrades.tsx
"use client"

import React, { useMemo, useState } from "react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { COURSES, STUDENTS_BY_COURSE, type StudentRow } from "../mock"
import { BarChart3, Users, X } from "lucide-react"

type EditState = {
  open: boolean
  courseId: string
  studentId: string
  grade1: string
  grade2: string
  attendance: string
}

export default function ProfessorGrades() {
  const [courseId, setCourseId] = useState<string>(COURSES[0]?.id ?? "c1")

  const [rows, setRows] = useState<StudentRow[]>(
    () => (STUDENTS_BY_COURSE[courseId] ?? []).map((r) => ({ ...r }))
  )

  // atualiza tabela quando troca curso
  React.useEffect(() => {
    setRows((STUDENTS_BY_COURSE[courseId] ?? []).map((r) => ({ ...r })))
  }, [courseId])

  const course = useMemo(() => COURSES.find((c) => c.id === courseId), [courseId])

  const average = useMemo(() => {
    const nums: number[] = []
    for (const r of rows) {
      const g1 = typeof r.grade1 === "number" ? r.grade1 : undefined
      const g2 = typeof r.grade2 === "number" ? r.grade2 : undefined
      const m = g1 != null && g2 != null ? (g1 + g2) / 2 : g1 ?? g2
      if (typeof m === "number" && !Number.isNaN(m)) nums.push(m)
    }
    if (!nums.length) return null
    return nums.reduce((a, b) => a + b, 0) / nums.length
  }, [rows])

  const [edit, setEdit] = useState<EditState>({
    open: false,
    courseId,
    studentId: "",
    grade1: "",
    grade2: "",
    attendance: "",
  })

  function openEdit(studentId: string) {
    const r = rows.find((x) => x.id === studentId)
    if (!r) return
    setEdit({
      open: true,
      courseId,
      studentId,
      grade1: r.grade1?.toString?.() ?? "",
      grade2: r.grade2?.toString?.() ?? "",
      attendance: r.attendance?.toString?.() ?? "",
    })
  }

  function saveEdit() {
    const g1 = edit.grade1.trim() === "" ? undefined : Number(edit.grade1.replace(",", "."))
    const g2 = edit.grade2.trim() === "" ? undefined : Number(edit.grade2.replace(",", "."))
    const at = edit.attendance.trim() === "" ? undefined : Number(edit.attendance.replace(",", "."))

    setRows((prev) =>
      prev.map((r) =>
        r.id === edit.studentId
          ? {
              ...r,
              grade1: typeof g1 === "number" && !Number.isNaN(g1) ? g1 : undefined,
              grade2: typeof g2 === "number" && !Number.isNaN(g2) ? g2 : undefined,
              attendance: typeof at === "number" && !Number.isNaN(at) ? at : undefined,
            }
          : r
      )
    )
    setEdit((p) => ({ ...p, open: false }))
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Notas e Frequência</h2>
        <p className="text-sm text-slate-500 mt-1">
          Selecione a disciplina e lance notas / frequência.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-white shadow-sm border rounded-2xl lg:col-span-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Users className="w-4 h-4" />
            Disciplina
          </div>

          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl outline-none text-sm"
          >
            {COURSES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} — {c.group}
              </option>
            ))}
          </select>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl border bg-slate-50">
              <div className="text-xs text-slate-500">Alunos</div>
              <div className="text-lg font-bold text-slate-900">{course?.students ?? rows.length}</div>
            </div>

            <div className="p-3 rounded-2xl border bg-slate-50">
              <div className="text-xs text-slate-500">Média</div>
              <div className="text-lg font-bold text-slate-900">
                {average == null ? "—" : average.toFixed(1)}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Button className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90 w-full">
              Publicar atualização
            </Button>
            <div className="text-xs text-slate-500 mt-2">
              (mock) depois você liga isso no banco.
            </div>
          </div>
        </Card>

        <Card className="p-0 bg-white shadow-sm border rounded-2xl overflow-hidden lg:col-span-2">
          <div className="p-5 border-b">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-slate-700" />
              <div>
                <div className="text-lg font-bold text-slate-900">{course?.name ?? "Turma"}</div>
                <div className="text-sm text-slate-500">{course?.group}</div>
              </div>
            </div>
          </div>

          <div className="p-5 overflow-auto">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[1.4fr_0.7fr_0.5fr_0.5fr_0.6fr] text-xs font-semibold text-slate-500 px-3 py-2">
                <div>Aluno</div>
                <div>Matrícula</div>
                <div className="text-center">Nota 1</div>
                <div className="text-center">Nota 2</div>
                <div className="text-center">Freq.</div>
              </div>

              <div className="space-y-2 mt-2">
                {rows.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => openEdit(r.id)}
                    className="w-full text-left grid grid-cols-[1.4fr_0.7fr_0.5fr_0.5fr_0.6fr] items-center gap-2 p-3 border rounded-2xl hover:bg-slate-50 transition"
                  >
                    <div className="font-semibold text-slate-900 truncate">{r.name}</div>
                    <div className="text-sm text-slate-500 truncate">{r.matricula}</div>
                    <div className="text-center font-bold text-slate-900">
                      {typeof r.grade1 === "number" ? r.grade1.toFixed(1) : "—"}
                    </div>
                    <div className="text-center font-bold text-slate-900">
                      {typeof r.grade2 === "number" ? r.grade2.toFixed(1) : "—"}
                    </div>
                    <div className="text-center font-bold text-slate-900">
                      {typeof r.attendance === "number" ? `${r.attendance}%` : "—"}
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 mt-3">
                Clique em um aluno para editar.
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Modal edição */}
      {edit.open && (
        <div className="fixed inset-0 bg-black/40 z-50 p-4">
          <div className="h-full w-full grid place-items-center">
            <Card className="w-full max-w-[560px] bg-white shadow-xl border rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-slate-900">Editar lançamento</div>
                    <div className="text-sm text-slate-500 mt-1">
                      Atualize nota e frequência (mock).
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 grid place-items-center rounded-xl hover:bg-slate-100"
                    onClick={() => setEdit((p) => ({ ...p, open: false }))}
                    aria-label="Fechar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Nota 1</div>
                    <input
                      value={edit.grade1}
                      onChange={(e) => setEdit((p) => ({ ...p, grade1: e.target.value }))}
                      placeholder="Ex: 8.5"
                      className="w-full mt-2 p-3 border rounded-2xl outline-none text-sm"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Nota 2</div>
                    <input
                      value={edit.grade2}
                      onChange={(e) => setEdit((p) => ({ ...p, grade2: e.target.value }))}
                      placeholder="Ex: 9.0"
                      className="w-full mt-2 p-3 border rounded-2xl outline-none text-sm"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Frequência (%)</div>
                    <input
                      value={edit.attendance}
                      onChange={(e) => setEdit((p) => ({ ...p, attendance: e.target.value }))}
                      placeholder="Ex: 92"
                      className="w-full mt-2 p-3 border rounded-2xl outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                  <Button
                    variant="outline"
                    className="rounded-xl w-full sm:w-auto"
                    onClick={() => setEdit((p) => ({ ...p, open: false }))}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90 w-full sm:w-auto"
                    onClick={saveEdit}
                  >
                    Salvar
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
