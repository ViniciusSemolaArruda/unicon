"use client"

import { useMemo, useState } from "react"
import { Card } from "@/app/_components/ui/Card"
import { Button } from "@/app/_components/ui/Button"
import { LIBRARY_CATEGORIES, LIBRARY_BOOKS } from "../mock"
import { BookOpen, Download, Search, Tag } from "lucide-react"

export default function StudentLibrary() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string>("ALL")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LIBRARY_BOOKS.filter((b) => {
      const matchQuery =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))

      const matchCategory = category === "ALL" ? true : b.categoryId === category
      return matchQuery && matchCategory
    })
  }, [query, category])

  function handleDownload(id: string) {
    // mock: depois você liga com Storage/Drive
    alert(`Baixando: ${id}`)
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Biblioteca Virtual</h2>
        <p className="text-sm text-slate-500 mt-1">
          Baixe livros, guias e materiais complementares por categoria.
        </p>
      </div>

      {/* filtros */}
      <Card className="p-4 bg-white shadow-sm border rounded-2xl">
        <div className="grid md:grid-cols-[1fr_260px] gap-3">
          <div className="flex items-center gap-2 p-3 border rounded-xl w-full">
            <Search className="w-4 h-4 text-slate-500 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, autor, tema..."
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          <div className="flex items-center gap-2 p-3 border rounded-xl w-full">
            <Tag className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            >
              <option value="ALL">Todas as categorias</option>
              {LIBRARY_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* lista */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filtered.map((b) => (
          <Card key={b.id} className="p-6 bg-white shadow-sm border rounded-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-xl bg-[#2D74B2]/10 grid place-items-center shrink-0">
                    <BookOpen className="w-5 h-5 text-[#2D74B2]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-lg font-bold text-slate-900 truncate">{b.title}</div>
                    <div className="text-sm text-slate-500 truncate">{b.author}</div>
                  </div>
                </div>

                <div className="mt-3 text-sm text-slate-600">
                  {b.description}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDBE00]/20 text-[#B88600] whitespace-nowrap">
                {b.format}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Categoria:{" "}
                <span className="font-semibold text-slate-700">{b.categoryName}</span>{" "}
                • {b.size}
              </div>

              <Button
                size="sm"
                className="rounded-xl bg-[#2D74B2] hover:bg-[#2D74B2]/90"
                onClick={() => handleDownload(b.id)}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {!filtered.length && (
        <Card className="p-6 bg-white shadow-sm border rounded-2xl">
          <div className="text-sm text-slate-500">
            Nenhum livro encontrado com os filtros atuais.
          </div>
        </Card>
      )}
    </div>
  )
}
