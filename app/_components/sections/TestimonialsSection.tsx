export function TestimonialsSection() {
  const items = [
    {
      text: "A UNICON mudou minha carreira. Hoje atuo como Head Concierge em um hotel 5 estrelas em Paris.",
      author: "Mariana Souza",
      role: "Turma 2023",
    },
    {
      text: "A infraestrutura é impecável e os professores são referências vivas no mercado.",
      author: "Pedro Alcântara",
      role: "Turma 2024",
    },
    {
      text: "O networking que a universidade proporciona é inigualável. Indico de olhos fechados.",
      author: "Carla Diaz",
      role: "Gestão Hoteleira",
    },
  ]

  return (
    <section className="py-24 bg-[#2D74B2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">O Que Dizem Nossos Alunos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="mb-4 text-[#FDBE00]">★★★★★</div>
              <p className="mb-6 italic text-blue-100">"{item.text}"</p>
              <div>
                <p className="font-bold">{item.author}</p>
                <p className="text-sm text-blue-200">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}