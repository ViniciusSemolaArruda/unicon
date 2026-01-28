"use client"

import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { BookOpen } from "lucide-react"

/* Mock temporário */
const COURSES = [
  {
    id: 1,
    name: "Gestão de Concierge",
    teacher: "Prof. Roberto Mendes",
    semester: "2026.1",
  },
  {
    id: 2,
    name: "Etiqueta e Protocolo",
    teacher: "Profa. Ana Paula",
    semester: "2026.1",
  },
  {
    id: 3,
    name: "Inglês para Hospitalidade",
    teacher: "Prof. Michael Brown",
    semester: "2026.1",
  },
]

export function StudentCourses() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Minhas Disciplinas</h1>
        <p className="text-gray-600 mt-1">
          Disciplinas em que você está matriculado neste semestre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map((course) => (
          <Card key={course.id} className="p-6 flex flex-col justify-between">

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#2D74B2]/10 text-[#2D74B2]">
                <BookOpen />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {course.name}
                </h2>
                <p className="text-sm text-gray-500">{course.teacher}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Semestre {course.semester}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm">
                Acessar disciplina
              </Button>
            </div>

          </Card>
        ))}
      </div>

    </div>
  )
}