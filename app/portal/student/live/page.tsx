import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"

export default function StudentLivePage() {
  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold text-gray-900">Aulas Online</h1>
      <p className="text-gray-600 mt-2">Em breve: sala ao vivo (Meet/Teams/Zoom).</p>

      <div className="mt-5">
        <Button variant="primary">Entrar na sala</Button>
      </div>
    </Card>
  )
}