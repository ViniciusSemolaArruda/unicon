"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown, LogIn } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/app/_components/ui/Button"
import { Logo } from "@/app/_components/Logo"

type SectionId = "top" | "about" | "courses" | "pilares" | "signup"

export function PublicHeader() {
  const [open, setOpen] = useState(false)

  // dropdown login (desktop)
  const [loginOpen, setLoginOpen] = useState(false)
  const loginRef = useRef<HTMLDivElement | null>(null)

  // fecha dropdown ao clicar fora
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!loginRef.current) return
      if (!loginRef.current.contains(e.target as Node)) setLoginOpen(false)
    }
    document.addEventListener("mousedown", onDocMouseDown)
    return () => document.removeEventListener("mousedown", onDocMouseDown)
  }, [])

  function scrollToSection(id: SectionId) {
    const doScroll = () => {
      // topo
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      // seção
      const el = document.getElementById(id)
      if (!el) return

      // offset do header sticky (ajuste se precisar)
      const headerOffset = 88
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: "smooth" })
    }

    // fecha menu mobile antes de rolar
    setOpen(false)

    // ✅ no mobile: espera a animação do menu fechar para não travar o scroll
    requestAnimationFrame(() => {
      setTimeout(doScroll, 220)
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-8 text-gray-600 font-medium items-center">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="hover:text-[#2D74B2] transition-colors"
            >
              Início
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="hover:text-[#2D74B2] transition-colors"
            >
              Sobre
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("courses")}
              className="hover:text-[#2D74B2] transition-colors"
            >
              Cursos
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("pilares")}
              className="hover:text-[#2D74B2] transition-colors"
            >
              Pilares
            </button>

            {/* ✅ INSCRREVA-SE DESTACADO */}
            <Link
              href="/inscreva-se"
              className="
                px-4 py-2 rounded-full
                bg-[#FC0000]/10 text-[#FC0000]
                font-semibold
                hover:bg-[#FC0000] hover:text-white
                transition-colors
              "
            >
              Inscreva-se
            </Link>
          </nav>

          {/* LOGIN DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <div
              ref={loginRef}
              className="relative"
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => setLoginOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={loginOpen}
                type="button"
              >
                <LogIn size={18} />
                Login
                <ChevronDown
                  size={16}
                  className={`transition-transform ${loginOpen ? "rotate-180" : ""}`}
                />
              </Button>

              <div className="absolute left-0 right-0 top-full h-2" />

              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="
                      absolute right-0 top-[calc(100%+8px)] w-56
                      rounded-xl border border-gray-100 bg-white shadow-lg
                      overflow-hidden
                    "
                    role="menu"
                  >
                    <Link
                      href="/login/student"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2D74B2] transition-colors"
                      onClick={() => setLoginOpen(false)}
                      role="menuitem"
                    >
                      Área do Aluno
                    </Link>

                    <Link
                      href="/login/professor"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2D74B2] transition-colors"
                      onClick={() => setLoginOpen(false)}
                      role="menuitem"
                    >
                      Área do Professor
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE (CENTRALIZADO) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-5">
              <div className="flex flex-col items-center text-center gap-4 text-gray-700 font-medium">
                <button
                  type="button"
                  onClick={() => scrollToSection("top")}
                  className="w-full"
                >
                  Início
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="w-full"
                >
                  Sobre
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("courses")}
                  className="w-full"
                >
                  Cursos
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("pilares")}
                  className="w-full"
                >
                  Pilares
                </button>

                {/* Inscreva-se (vai pra página) */}
                <Link
                  href="/inscreva-se"
                  onClick={() => setOpen(false)}
                  className="
                    mt-2 inline-flex justify-center w-full
                    px-4 py-2 rounded-full
                    bg-[#FC0000]/10 text-[#FC0000]
                    font-semibold
                    hover:bg-[#FC0000] hover:text-white
                    transition-colors
                  "
                >
                  Inscreva-se
                </Link>
              </div>

              <div className="h-px bg-gray-100 my-5" />

              <div className="flex flex-col items-center gap-3">
                <Link href="/login/student" onClick={() => setOpen(false)} className="w-full">
                  <Button variant="outline" fullWidth>
                    Área do Aluno
                  </Button>
                </Link>

                <Link href="/login/professor" onClick={() => setOpen(false)} className="w-full">
                  <Button variant="outline" fullWidth>
                    Área do Professor
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
