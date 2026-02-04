// app/portal/professor/layout.tsx
"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  UploadCloud,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { PROFESSOR } from "./mock"

function NavItem({
  href,
  icon: Icon,
  label,
  match,
  onNavigate,
}: {
  href: string
  icon: React.ElementType
  label: string
  match?: "exact" | "startsWith"
  onNavigate?: () => void
}) {
  const pathname = usePathname()
  const active =
    match === "startsWith" ? pathname.startsWith(href) : pathname === href

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition",
        "text-white/90 hover:bg-white/10",
        active ? "bg-white/15" : "",
      ].join(" ")}
    >
      <span className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <span className="font-medium truncate">{label}</span>
    </Link>
  )
}

function SidebarContent({
  onNavigate,
  onLogout,
  showBrand = true,
}: {
  onNavigate?: () => void
  onLogout: () => void
  showBrand?: boolean
}) {
  return (
    <div className="h-full flex flex-col p-5">
      {showBrand && (
        <div className="flex items-center gap-3 px-2 py-2">
          <img
            src="/logo.png"
            alt="UNICONU"
            className="w-36 max-w-[70%] object-contain"
          />
        </div>
      )}

      <div className={showBrand ? "mt-6 space-y-2" : "mt-2 space-y-2"}>
        <NavItem
          href="/portal/professor"
          icon={LayoutDashboard}
          label="Dashboard"
          match="exact"
          onNavigate={onNavigate}
        />
        <NavItem
          href="/portal/professor/classes"
          icon={ClipboardList}
          label="Turmas e Aulas"
          match="startsWith"
          onNavigate={onNavigate}
        />
        <NavItem
          href="/portal/professor/grades"
          icon={BarChart3}
          label="Notas e Frequência"
          match="startsWith"
          onNavigate={onNavigate}
        />
        <NavItem
          href="/portal/professor/upload"
          icon={UploadCloud}
          label="Upload de Materiais"
          match="startsWith"
          onNavigate={onNavigate}
        />
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-white/90 hover:bg-white/10 transition"
        >
          <span className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 shrink-0">
            <LogOut className="w-5 h-5" />
          </span>
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  )
}

export default function ProfessorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleLogout() {
    localStorage.clear()
    sessionStorage.clear()
    setMobileOpen(false)
    router.push("/")
  }

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener("popstate", close)
    return () => window.removeEventListener("popstate", close)
  }, [])

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <div className="flex min-h-screen">
        {/* Sidebar desktop */}
        <aside className="hidden lg:block w-[280px] bg-[#204f79] text-white">
          <SidebarContent onLogout={handleLogout} showBrand />
        </aside>

        {/* Drawer mobile */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/40"
            />
            <div className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[#204f79] text-white shadow-2xl">
              <div className="flex items-center justify-between p-4">
                <img
                  src="/logo.png"
                  alt="UNICONU"
                  className="h-8 object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 grid place-items-center rounded-xl bg-white/10"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-1">
                <SidebarContent
                  onLogout={handleLogout}
                  onNavigate={() => setMobileOpen(false)}
                  showBrand={false}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Topbar */}
          <header className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl hover:bg-slate-100 grid place-items-center"
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5 text-slate-700" />
              </button>

              <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                Portal do Professor
              </h1>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <button
                type="button"
                className="w-10 h-10 rounded-full hover:bg-slate-100 grid place-items-center"
                aria-label="Notificações"
              >
                <Bell className="w-5 h-5 text-slate-500" />
              </button>

              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right leading-tight">
                  <div className="text-sm font-semibold text-slate-900 truncate max-w-[220px]">
                    {PROFESSOR.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    Matrícula: {PROFESSOR.matricula}
                  </div>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200 border shrink-0" />
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-6 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
