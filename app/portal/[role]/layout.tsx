"use client"


import { usePathname, useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { useMemo, useState } from "react"
import { cn } from "@/app/_lib/cn"
import { Bell, BookOpen, GraduationCap, LayoutDashboard, LogOut, Menu, Settings, Shield, Upload, User, Users, BarChart, FileText, Video, CheckCircle } from "lucide-react"


type Role = "student" | "professor" | "admin"


export default function PortalLayout({ children }: { children: React.ReactNode }) {
const router = useRouter()
const pathname = usePathname()
const params = useParams<{ role: Role }>()
const role = params.role


const [sidebarOpen, setSidebarOpen] = useState(true)


const menus = useMemo(() => {
return {
student: [
{ icon: LayoutDashboard, label: "Dashboard", path: "/portal/student" },
{ icon: BookOpen, label: "Minhas Disciplinas", path: "/portal/student/courses" },
{ icon: BarChart, label: "Notas e Frequência", path: "/portal/student/grades" },
{ icon: FileText, label: "Materiais", path: "/portal/student/materials" },
{ icon: Video, label: "Aulas Online", path: "/portal/student/live" },
],
professor: [
{ icon: LayoutDashboard, label: "Dashboard", path: "/portal/professor" },
{ icon: Users, label: "Minhas Turmas", path: "/portal/professor/classes" },
{ icon: CheckCircle, label: "Lançar Notas", path: "/portal/professor/grades" },
{ icon: Upload, label: "Materiais", path: "/portal/professor/upload" },
],
admin: [
{ icon: LayoutDashboard, label: "Dashboard", path: "/portal/admin" },
{ icon: GraduationCap, label: "Alunos", path: "/portal/admin/students" },
{ icon: User, label: "Professores", path: "/portal/admin/professors" },
{ icon: BookOpen, label: "Cursos", path: "/portal/admin/courses" },
{ icon: Settings, label: "Configurações", path: "/portal/admin/settings" },
],
} as const
}, [])
const currentMenu = menus[role] ?? []


return (
<div className="min-h-screen bg-[#F3F4F6] flex">
<aside
className={cn(
"bg-[#2D74B2] text-white fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-200 ease-in-out flex flex-col",
sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
)}
>
<div className="h-16 flex items-center justify-center border-b border-[#9BC1E5]/20">
<div className={cn("font-bold text-xl flex items-center gap-2", !sidebarOpen && "lg:hidden")}>
<span className="w-8 h-8 rounded bg-[#FDBE00] flex items-center justify-center text-[#111827]">U</span>
<span>UNICON</span>
</div>
<div className={cn("hidden lg:flex items-center justify-center text-xl font-serif", sidebarOpen && "hidden")}>U</div>
</div>


<nav className="flex-1 py-6 px-3 space-y-1">
{currentMenu.map((item) => {
const isActive = pathname === item.path
const Icon = item.icon
return (
<Link
key={item.path}
href={item.path}
className={cn(
"flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group relative",
isActive ? "bg-[#9BC1E5]/20 text-white" : "text-blue-100 hover:bg-[#9BC1E5]/10 hover:text-white"
)}
title={!sidebarOpen ? item.label : ""}
>
<Icon size={22} className={cn(isActive && "text-[#FDBE00]")} />
<span className={cn(sidebarOpen ? "block" : "hidden lg:hidden")}>{item.label}</span>
{!sidebarOpen && (
<div className="hidden lg:group-hover:block absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
{item.label}
</div>
)}
</Link>
)
})}
</nav>


<div className="p-4 border-t border-[#9BC1E5]/20">
<button
onClick={() => router.push("/")}
className="flex items-center gap-3 text-blue-100 hover:text-white w-full px-3 py-2 rounded-lg hover:bg-[#9BC1E5]/10 transition-colors"
>
<LogOut size={22} />
<span className={cn(sidebarOpen ? "block" : "hidden lg:hidden")}>Sair</span>
</button>
</div>
</aside>


<div className="flex-1 flex flex-col min-w-0 overflow-hidden">
<header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8">
<button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-500">
<Menu />
</button>


<h1 className="text-xl font-bold text-gray-800 capitalize hidden sm:block">
Portal do {role === "admin" ? "Administrador" : role === "student" ? "Aluno" : "Professor"}
</h1>


<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-[#2D74B2]">
<Bell size={20} />
<span className="absolute top-1 right-1 w-2 h-2 bg-[#FC0000] rounded-full"></span>
</button>


<div className="flex items-center gap-3 border-l pl-4 border-gray-200">
<div className="text-right hidden md:block">
<p className="text-sm font-medium text-gray-900">
{role === "student" ? "João Silva" : role === "professor" ? "Dr. Roberto Mendes" : "Admin"}
</p>
<p className="text-xs text-gray-500">{role === "student" ? "Matrícula: 2026001" : role === "professor" ? "Docente" : "Gestão"}</p>
</div>


<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-[#2D74B2]">
<img
src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?auto=format&fit=crop&q=80&w=600"
alt="User"
className="w-full h-full object-cover"
/>
</div>
</div>
</div>
</header>


<main className="flex-1 overflow-y-auto p-4 lg:p-8">
<div className="max-w-6xl mx-auto">{children}</div>
</main>
</div>
</div>
)
}