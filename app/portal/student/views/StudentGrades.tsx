"use client"

import { Card } from "@/app/_components/ui/Card"
import { GRADES } from "../mock"

export default function StudentGrades() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Notas e Frequência</h2>
        <p className="text-sm text-slate-500 mt-1">Resumo por disciplina e detalhes de avaliações.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {GRADES.map((g) => (
          <Card key={g.id} className="p-6 bg-white shadow-sm border rounded-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-slate-900">{g.course}</div>
                <div className="text-sm text-slate-500 mt-1">Resumo do semestre</div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-500">Média</div>
                <div className="text-3xl font-extrabold text-slate-900">{g.average.toFixed(1)}</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 p-3 rounded-2xl border bg-slate-50">
                <div className="text-xs text-slate-500">Frequência</div>
                <div className="text-lg font-bold text-slate-900">{g.attendance}%</div>
              </div>
              <div className="flex-1 p-3 rounded-2xl border bg-slate-50">
                <div className="text-xs text-slate-500">Situação</div>
                <div className="text-lg font-bold text-slate-900">
                  {g.attendance >= 75 ? "Regular" : "Atenção"}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-sm font-semibold text-slate-900 mb-2">Avaliações</div>
              <div className="space-y-2">
                {g.items.map((it) => (
                  <div key={it.label} className="flex items-center justify-between p-3 border rounded-2xl">
                    <div>
                      <div className="font-semibold text-slate-900">{it.label}</div>
                      <div className="text-xs text-slate-500">Peso {it.weight}</div>
                    </div>
                    <div className="text-lg font-bold text-slate-900">{it.value.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
