export function PillarsSection() {
  const items = [
    {
      title: "Metodologia Exclusiva",
      text: "Formação baseada na integração entre técnica, postura, empatia, atitude de luxo e inteligência emocional.",
    },
    {
      title: "Foco em Atendimento Humanizado",
      text: "Pessoas antes de processos. Cada aluno é preparado para gerar experiências memoráveis.",
    },
    {
      title: "Conexão com o Mercado",
      text: "Conteúdos alinhados às reais exigências de hotéis, empresas e serviços de alto padrão.",
    },
    {
      title: "Formação Completa",
      text: "Cursos, mentorias e programas que desenvolvem competências técnicas e comportamentais.",
    },
    {
      title: "Excelência como Padrão",
      text: "Compromisso com qualidade, consistência e alto nível em todas as entregas.",
    },
    {
      title: "Propósito e Transformação",
      text: "Formamos profissionais que entendem que servir é uma arte.",
    },
  ]

  return (
    <section className="py-24 bg-[#2D74B2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center mb-16">
          Os Pilares da UNICON
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#FDBE00]">
                {item.title}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}