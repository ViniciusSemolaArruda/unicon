"use client"

import { BookOpen, Calendar, BarChart3, Bell } from "lucide-react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"

/* Mock temporário */
const KPI = [
  { label: "Média Geral", value: "8.7", icon: BarChart3 },
  { label: "Frequência", value: "94%", icon: Calendar },
  { label: "Disciplinas", value: "6", icon: BookOpen },
]

const CLASSES = [
  { id: 1, name: "Gestão de Concierge", time: "Seg • 14:00" },
  { id: 2, name: "Etiqueta e Protocolo", time: "Ter • 10:00" },
]

const NOTICES = [
  { id: 1, text: "Nota lançada em Etiqueta e Protocolo" },
  { id: 2, text: "Novo material disponível" },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-8">

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {KPI.map((k) => {
          const Icon = k.icon
          return (
            <Card key={k.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{k.label}</p>
                  <p className="text-3xl font-bold">{k.value}</p>
                </div>
                <Icon className="text-[#2D74B2]" />
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Próximas aulas */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Próximas aulas</h2>

          <div className="space-y-3">
            {CLASSES.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.time}</p>
                </div>

                <Button size="sm" variant="outline">
                  Entrar
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Avisos */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell />
            <h2 className="text-lg font-bold">Avisos</h2>
          </div>

          <div className="space-y-3">
            {NOTICES.map((n) => (
              <div
                key={n.id}
                className="p-3 border rounded-lg bg-gray-50"
              >
                {n.text}
              </div>
            ))}
          </div>
        </Card>

      </div>

    </div>
  )
}