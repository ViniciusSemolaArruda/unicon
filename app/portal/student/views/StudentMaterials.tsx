//app\portal\student\views\StudentMaterials.tsx
"use client"

import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { MATERIALS } from "../mock"

export default function StudentMaterials() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Materiais</h2>
        <p className="text-sm text-slate-500 mt-1">Arquivos por disciplina (PDF, slides, docs).</p>
      </div>

      <div className="space-y-6">
        {MATERIALS.map((m) => (
          <Card key={m.id} className="p-6 bg-white shadow-sm border rounded-2xl">
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-bold text-slate-900">{m.course}</div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white"
              >
                Ver tudo
              </Button>
            </div>

            <div className="mt-4 space-y-3">
              {m.files.map((f) => (
                <div key={f.id} className="flex items-center justify-between gap-4 p-4 border rounded-2xl">
                  <div>
                    <div className="font-semibold text-slate-900">{f.name}</div>
                    <div className="text-sm text-slate-500">{f.type} • {f.size} • Atualizado: {f.updated}</div>
                  </div>
                  <Button size="sm" className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90">
                    Baixar
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
