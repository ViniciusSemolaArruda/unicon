import { Button } from "@/app/_components/ui/Button"


export function CoursesSection() {
const courses = [
{
title: "Concierge Internacional",
desc: "Formação completa em atendimento de alto padrão e gestão de experiências.",
image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=900",
},
{
title: "Gestão Hoteleira de Luxo",
desc: "Estratégias de liderança para os hotéis mais prestigiados do mundo.",
image: "https://images.unsplash.com/photo-1769284000746-6cbcc55c259f?auto=format&fit=crop&q=80&w=900",
},
{
title: "Etiqueta e Protocolo",
desc: "Domine as normas de conduta para eventos governamentais e corporativos.",
image: "https://images.unsplash.com/photo-1758270705172-07b53627dfcb?auto=format&fit=crop&q=80&w=900",
},
]


return (
<section id="courses" className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-[#2D74B2] mb-4">Nossos Cursos de Excelência</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Programas desenvolvidos para atender as demandas do mercado de luxo global.</p>
</div>


<div className="grid md:grid-cols-3 gap-8">
{courses.map((c, i) => (
<div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
<div className="h-48 overflow-hidden">
<img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
<p className="text-gray-600 mb-4 text-sm">{c.desc}</p>
<Button variant="outline" fullWidth size="sm">
Saiba Mais
</Button>
</div>
</div>
))}
</div>
</div>
</section>
)
}