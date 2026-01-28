"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Badge } from "@/app/_components/ui/Badge"
import { Users, Wallet, Clock3, BadgeCheck } from "lucide-react"

type CountUpProps = {
  value: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  format?: (n: number) => string
  className?: string
}

function CountUp({
  value,
  durationMs = 3000,
  decimals = 0,
  prefix = "",
  suffix = "",
  format,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [shown, setShown] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!shown) return

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shown, value, durationMs])

  const text = useMemo(() => {
    const fixed = Number(display.toFixed(decimals))
    const base = format ? format(fixed) : fixed.toFixed(decimals)
    return `${prefix}${base}${suffix}`
  }, [display, decimals, prefix, suffix, format])

  return <span ref={ref} className={className}>{text}</span>
}

type StatItem = {
  icon: React.ReactNode
  value: number
  label: string
  helper?: string
  prefix?: string
  suffix?: string
  decimals?: number
  format?: (n: number) => string
}

export function ConciergeStatsSection() {
  const stats: StatItem[] = [
    {
      icon: <Users className="h-12 w-12 text-black" />,
      value: 1850,
      label: "Vagas de concierge no Brasil",
      helper: "Estimativa de mercado",
    },
    {
      icon: <Wallet className="h-12 w-12 text-black" />,
      value: 2289.1,
      label: "Média salarial CLT",
      prefix: "R$ ",
      decimals: 2,
      format: (n) => n.toLocaleString("pt-BR", { minimumFractionDigits: 2 }),
    },
    {
      icon: <Clock3 className="h-12 w-12 text-black" />,
      value: 43,
      label: "Horas semanais",
      suffix: "h",
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-black" />,
      value: 422130,
      label: "CBO Concierge",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FDBE00]" />

      <div className="relative max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-black/10 rounded-xl p-5 text-center shadow-md"
            >
              <div className="flex justify-center mb-3">
                {s.icon}
              </div>

              <CountUp
                value={s.value}
                decimals={s.decimals ?? 0}
                prefix={s.prefix ?? ""}
                suffix={s.suffix ?? ""}
                format={s.format}
                className="text-3xl md:text-4xl font-extrabold text-black"
              />

              <div className="mt-1 text-sm font-semibold uppercase text-black">
                {s.label}
              </div>

              {s.helper && (
                <div className="mt-1 text-xs text-black/70">
                  {s.helper}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}