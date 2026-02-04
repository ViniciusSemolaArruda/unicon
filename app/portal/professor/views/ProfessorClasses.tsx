// app/portal/professor/views/ProfessorClasses.tsx
"use client"

import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { COURSES, TODAY_CLASSES } from "../mock"

export default function ProfessorClasses() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Turmas e Aulas</h2>
        <p className="text-sm text-slate-500 mt-1">
          Veja as turmas ativas e as aulas do dia.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white shadow-sm border rounded-2xl">
          <div className="text-lg font-bold text-slate-900">Aulas de hoje</div>
          <div className="text-sm text-slate-500 mt-1">Agenda resumida.</div>

          <div className="mt-4 space-y-3">
            {TODAY_CLASSES.map((c) => (
              <div key={c.id} className="p-4 border rounded-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">
                      {c.course} — {c.classGroup}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {c.time} • {c.room} • {c.students} alunos
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDBE00]/20 text-[#B88600]">
                    {c.status}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xl border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white"
                  >
                    Abrir detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white shadow-sm border rounded-2xl">
          <div className="text-lg font-bold text-slate-900">Turmas ativas</div>
          <div className="text-sm text-slate-500 mt-1">Disciplinas do semestre.</div>

          <div className="mt-4 space-y-3">
            {COURSES.map((c) => (
              <div key={c.id} className="p-4 border rounded-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-500">{c.code}</div>
                    <div className="text-base font-bold text-slate-900 mt-1">{c.name}</div>
                    <div className="text-sm text-slate-500 mt-1">
                      {c.group} • {c.students} alunos • Próxima: {c.nextClass}
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2D74B2]/10 text-[#2D74B2]">
                    Ativa
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-end gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xl"
                  >
                    Ver alunos
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90"
                  >
                    Ir para notas
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
