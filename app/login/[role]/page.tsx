"use client"

import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Logo } from "@/app/_components/Logo"
import { Card } from "@/app/_components/ui/Card"
import { Input } from "@/app/_components/ui/Input"
import { Button } from "@/app/_components/ui/Button"
import { cn } from "@/app/_lib/cn"

type Role = "student" | "professor" | "admin"

type LabelConfig = {
  title: string
  color: string
}

const LABELS: Record<Role, LabelConfig> = {
  student: { title: "Acesso do Aluno", color: "text-[#2D74B2]" },
  professor: { title: "Acesso do Professor", color: "text-[#FDBE00]" },
  admin: { title: "Acesso Administrativo", color: "text-[#FC0000]" },
}

function isRole(v: unknown): v is Role {
  return v === "student" || v === "professor" || v === "admin"
}

export default function LoginPage() {
  const router = useRouter()
  const params = useParams<{ role?: string }>()
  const roleParam = params?.role
  const role: Role = isRole(roleParam) ? roleParam : "student"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const labels = useMemo<LabelConfig>(() => LABELS[role], [role])

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      router.push(`/portal/${role}`)
    }, 900)
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h2 className={cn("mt-6 text-center text-3xl font-extrabold", labels.color)}>{labels.title}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <Input
              label="E-mail Institucional"
              type="email"
              placeholder="seu.nome@unicon.edu.br"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />

            <div>
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <div className="text-right mt-2">
                <a href="#" className="text-sm font-medium text-[#2D74B2] hover:text-[#1c4b75]">
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <Button type="submit" fullWidth variant="primary" className={cn(loading && "opacity-75 cursor-wait")}>
              {loading ? "Autenticando..." : "Entrar no Portal"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou retorne para</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1">
              <Link href="/" className="text-center text-sm text-gray-600 hover:text-gray-900">
                Página Inicial
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}