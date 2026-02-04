//app\portal\student\views\StudentLive.tsx
"use client"

import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { LIVE_SESSIONS } from "../mock"

export default function StudentLive() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Aulas Online</h2>
        <p className="text-sm text-slate-500 mt-1">Entre ao vivo, veja agenda e links das sessões.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {LIVE_SESSIONS.map((s) => (
          <Card key={s.id} className="p-6 bg-white shadow-sm border rounded-2xl">
            <div className="text-lg font-bold text-slate-900">{s.title}</div>
            <div className="text-sm text-slate-500 mt-1">{s.teacher}</div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 p-3 rounded-2xl border bg-slate-50">
                <div className="text-xs text-slate-500">Data</div>
                <div className="font-semibold text-slate-900">{s.date}</div>
              </div>
              <div className="flex-1 p-3 rounded-2xl border bg-slate-50">
                <div className="text-xs text-slate-500">Horário</div>
                <div className="font-semibold text-slate-900">{s.time}</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDBE00]/20 text-[#B88600]">
                {s.status}
              </span>

              <Button className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90">
                Entrar na sala
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
