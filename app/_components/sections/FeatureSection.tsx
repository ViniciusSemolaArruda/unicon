import { CheckCircle } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
           <h2 className="text-[26px] sm:text-3xl font-bold text-[#2D74B2] mb-6 leading-tight tracking-tight text-center lg:text-left">
  Excelência em Atendimento e Hospitalidade
</h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A UNICON – Universidade Corporativa de Concierges é uma instituição dedicada
              à formação, capacitação e desenvolvimento de profissionais do atendimento,
              hospitalidade e serviços personalizados, com foco na excelência, humanização
              e experiência do cliente.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Com metodologia própria, que integra técnica, postura, empatia, atitude de luxo
              e inteligência emocional, formamos profissionais preparados para atuar com
              propósito, consistência e alto desempenho no Brasil e no exterior.
            </p>

            <ul className="space-y-4">
              {[
                "Metodologia Exclusiva em Atendimento Humanizado",
                "Formações, Cursos e Mentorias Especializadas",
                "Corpo Docente com Vivência no Mercado de Luxo",
                "Foco em Excelência, Postura Profissional e Experiência do Cliente",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-[#73ff00]" size={28} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 lg:-inset-4 bg-[#B00000]/20 rounded-2xl transform rotate-3" />

<img
  src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1400"
  alt="Atendimento e Hospitalidade de Excelência"
  className="relative rounded-xl shadow-lg w-full max-w-full"
 />
          </div>

        </div>
      </div>
    </section>
  )
}