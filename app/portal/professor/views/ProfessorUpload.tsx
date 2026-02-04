// app/portal/professor/views/ProfessorUpload.tsx
"use client"

import { useMemo, useState } from "react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { COURSES, MATERIAL_UPLOAD_BUCKETS } from "../mock"
import { UploadCloud, FileText, Plus } from "lucide-react"

export default function ProfessorUpload() {
  const [courseId, setCourseId] = useState<string>(COURSES[0]?.id ?? "c1")
  const bucket = useMemo(
    () => MATERIAL_UPLOAD_BUCKETS.find((b) => b.courseId === courseId),
    [courseId]
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Upload de Materiais</h2>
        <p className="text-sm text-slate-500 mt-1">
          Envie PDFs, slides e documentos por disciplina (mock).
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-white shadow-sm border rounded-2xl lg:col-span-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <UploadCloud className="w-4 h-4" />
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

          <div className="mt-5 p-4 rounded-2xl border bg-slate-50">
            <div className="text-xs text-slate-500">Envio rápido</div>
            <div className="mt-2 flex flex-col gap-2">
              <Button className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90">
                <Plus className="w-4 h-4 mr-2" />
                Selecionar arquivo
              </Button>
              <Button variant="outline" className="rounded-xl">
                Criar pasta
              </Button>
            </div>
            <div className="text-xs text-slate-500 mt-3">
              (mock) depois você liga com Storage / Cloudinary.
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white shadow-sm border rounded-2xl lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-slate-900">{bucket?.course ?? "Materiais"}</div>
              <div className="text-sm text-slate-500 mt-1">Arquivos enviados para a turma.</div>
            </div>

            <Button
              size="sm"
              variant="outline"
              className="rounded-xl border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white"
            >
              Organizar
            </Button>
          </div>

          <div className="mt-4 space-y-3">
            {(bucket?.files ?? []).map((f) => (
              <div key={f.id} className="flex items-center justify-between gap-4 p-4 border rounded-2xl">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#2D74B2]/10 grid place-items-center shrink-0">
                    <FileText className="w-5 h-5 text-[#2D74B2]" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">{f.name}</div>
                    <div className="text-sm text-slate-500">
                      {f.type} • {f.size} • Atualizado: {f.updated}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl">
                    Renomear
                  </Button>
                  <Button size="sm" className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90">
                    Publicar
                  </Button>
                </div>
              </div>
            ))}

            {!bucket?.files?.length && (
              <div className="text-sm text-slate-500 p-4 border rounded-2xl bg-slate-50">
                Nenhum arquivo enviado para esta disciplina ainda.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
