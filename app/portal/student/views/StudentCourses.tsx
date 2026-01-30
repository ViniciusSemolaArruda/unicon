"use client"

import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { COURSES } from "../mock"

export default function StudentCourses() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Minhas Disciplinas</h2>
        <p className="text-sm text-slate-500 mt-1">Acompanhe progresso, professor e próximas aulas.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {COURSES.map((c) => (
          <Card key={c.id} className="p-6 bg-white shadow-sm border rounded-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500">{c.code}</div>
                <div className="text-lg font-bold text-slate-900 mt-1">{c.name}</div>
                <div className="text-sm text-slate-500 mt-1">{c.professor}</div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2D74B2]/10 text-[#2D74B2]">
                {c.status}
              </span>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Progresso</span>
                <span className="font-semibold text-slate-900">{c.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
                <div className="h-full bg-[#2D74B2]" style={{ width: `${c.progress}%` }} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="text-sm">
                <div className="text-slate-500">Próxima aula</div>
                <div className="font-semibold text-slate-900">{c.nextClass}</div>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="rounded-xl border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white"
              >
                Abrir disciplina
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
