"use client"

import Image from "next/image"
import { Badge } from "@/app/_components/ui/Badge"
import { Button } from "@/app/_components/ui/Button"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative bg-[#2D74B2] text-white overflow-hidden py-24 lg:py-32">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero.png"
          alt="Campus UNICON"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2D74B2] to-[#2D74B2]/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#FDBE00] text-[#111827] mb-6 inline-block">
              Inscrições Abertas 2026
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Universidade de Concierges <br />
              
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-10 font-light">
              Formação profissional para excelência em concierge, hospitalidade e gestão de serviços de alto padrão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Conheça a UNICON
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-[#2D74B2]"
              >
                Ver Cursos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}