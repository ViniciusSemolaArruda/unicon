"use client"

import { Bell } from "lucide-react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { KPI, CLASSES, NOTICES } from "../mock"

function toneClasses(tone: "blue" | "amber" | "green") {
  if (tone === "blue")
    return {
      border: "border-l-[#2D74B2]",
      iconBg: "bg-[#2D74B2]/10",
      iconFg: "text-[#2D74B2]",
    }
  if (tone === "amber")
    return {
      border: "border-l-[#FDBE00]",
      iconBg: "bg-[#FDBE00]/15",
      iconFg: "text-[#B88600]",
    }
  return {
    border: "border-l-[#91D04E]",
    iconBg: "bg-[#91D04E]/15",
    iconFg: "text-[#4E9A1D]",
  }
}

export default function StudentDashboard() {
  return (
    <div className="space-y-8">

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {KPI.map((k) => {
          const Icon = k.icon
          const t = toneClasses(k.tone)
          return (
            <Card
              key={k.label}
              className={[
                "p-6 bg-white shadow-sm border rounded-2xl",
                "border-l-4",
                t.border,
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">{k.label}</p>
                  <p className="text-4xl font-extrabold text-slate-900 mt-1">{k.value}</p>
                  <p className="text-sm text-slate-500 mt-2">{k.helper}</p>
                </div>

                <div className={["w-11 h-11 rounded-xl grid place-items-center", t.iconBg].join(" ")}>
                  <Icon className={["w-5 h-5", t.iconFg].join(" ")} />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Próximas aulas */}
        <Card className="p-6 bg-white shadow-sm border rounded-2xl">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Próximas Aulas</h2>

          <div className="space-y-3">
            {CLASSES.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-4 p-4 border rounded-2xl bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 grid place-items-center text-[#2D74B2] font-bold">
                    {c.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{c.name}</p>
                    <p className="text-sm text-slate-500">{c.time}</p>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-xl border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white"
                >
                  Entrar
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Avisos */}
        <Card className="p-6 bg-white shadow-sm border rounded-2xl">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Avisos Recentes</h2>

          <div className="space-y-3">
            {NOTICES.map((n) => (
              <div
                key={n.id}
                className="flex items-start gap-3 p-4 rounded-2xl border bg-[#FFF7D6]"
              >
                <span className="mt-0.5 w-9 h-9 rounded-xl bg-[#FDBE00]/20 grid place-items-center">
                  <Bell className="w-4 h-4 text-[#B88600]" />
                </span>

                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{n.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{n.when}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
