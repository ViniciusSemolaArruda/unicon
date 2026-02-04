"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { MessageCircle, Phone } from "lucide-react"

type Step = 1 | 2 | 3 | 4 | 5 | 6

function StepDot({ n, current }: { n: Step; current: Step }) {
  const active = n === current
  const done = n < current

  return (
    <div className="flex items-center">
      <div
        className={[
          "w-8 h-8 rounded-full grid place-items-center text-[12px] font-extrabold",
          active
            ? "bg-[#2D74B2] text-white"
            : done
            ? "bg-[#91D04E] text-white"
            : "bg-white text-slate-300 border border-slate-200",
        ].join(" ")}
      >
        {n}
      </div>
      {n !== 6 && <div className="w-10 h-[2px] bg-slate-200" />}
    </div>
  )
}

function FloatingTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
      <div className="px-5 py-2 rounded-full bg-white border border-[#2D74B2] text-[#2D74B2] font-bold text-sm shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        {children}
      </div>
    </div>
  )
}

export default function InscrevaSePage() {
  const [step] = useState<Step>(1)

  // ---- form (mock) ----
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")
  const [rg, setRg] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [genero, setGenero] = useState("")
  const [nomeSocial, setNomeSocial] = useState<"SIM" | "NAO">("NAO")
  const [pcd, setPcd] = useState<"SIM" | "NAO">("NAO")
  const [aceitaTermos, setAceitaTermos] = useState(false)

  const [formaIngresso, setFormaIngresso] = useState("")
  const [modalidade, setModalidade] = useState("")
  const [campus, setCampus] = useState("")
  const [curso, setCurso] = useState("")
  const [turno, setTurno] = useState("")

  const canAdvance = useMemo(() => {
    return (
      cpf.trim() &&
      nome.trim() &&
      email.trim() &&
      celular.trim() &&
      rg.trim() &&
      nascimento.trim() &&
      genero.trim() &&
      formaIngresso.trim() &&
      modalidade.trim() &&
      campus.trim() &&
      curso.trim() &&
      turno.trim() &&
      aceitaTermos
    )
  }, [
    cpf,
    nome,
    email,
    celular,
    rg,
    nascimento,
    genero,
    formaIngresso,
    modalidade,
    campus,
    curso,
    turno,
    aceitaTermos,
  ])

  function onAdvance() {
    if (!canAdvance) return
    alert("Avançar (mock) — depois ligamos com backend.")
  }

  // mais fiel ao modelo (inputs baixos, pouca altura)
  const inputBase =
    "w-full h-10 rounded-full border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#2D74B2] focus:ring-2 focus:ring-[#2D74B2]/15"

  const selectBase =
    "w-full h-10 rounded-full border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#2D74B2] focus:ring-2 focus:ring-[#2D74B2]/15"

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar (bem parecido com a referência) */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <img src="/logo.png" alt="UNICON" className="h-9 w-auto object-contain" />

            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center">
                <StepDot n={1} current={step} />
                <StepDot n={2} current={step} />
                <StepDot n={3} current={step} />
                <StepDot n={4} current={step} />
                <StepDot n={5} current={step} />
                <StepDot n={6} current={step} />
              </div>
            </div>

            <Link
              href="/"
              className="px-4 py-2 rounded-full bg-[#2D74B2] text-white text-sm font-semibold hover:bg-[#2D74B2]/90 transition"
            >
              Minhas Inscrições
            </Link>
          </div>
        </div>
        <div className="h-[3px] bg-[#2D74B2]" />
      </div>

      {/* Conteúdo */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          INSCREVA-SE NA UNICON
        </h1>

        {/* Cards com largura e spacing igualzinho */}
        <div className="mt-8 space-y-10">
          {/* Dados Pessoais */}
          <section className="relative rounded-[18px] border-2 border-[#2D74B2] bg-white">
            <FloatingTitle>Dados Pessoais</FloatingTitle>

            <div className="p-7 sm:p-8 pt-10">
              <div className="space-y-4">
                <input
                  className={inputBase}
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="CPF"
                />

                <input
                  className={inputBase}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome Completo"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className={inputBase}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                  />
                  <input
                    className={inputBase}
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    placeholder="Celular"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    className={inputBase}
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    placeholder="RG"
                  />

                  {/* mantém placeholder e aparência */}
                  <input
                    className={inputBase}
                    type="date"
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                  />

                  <select
                    className={selectBase}
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                  >
                    <option value="">Gênero</option>
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                    <option value="NB">Não-binário</option>
                    <option value="NI">Prefiro não informar</option>
                  </select>
                </div>

                <div className="space-y-5 pt-1">
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-slate-800">Utiliza nome social?</div>
                    <div className="flex items-center gap-6 text-sm">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="nomeSocial"
                          checked={nomeSocial === "SIM"}
                          onChange={() => setNomeSocial("SIM")}
                        />
                        Sim
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="nomeSocial"
                          checked={nomeSocial === "NAO"}
                          onChange={() => setNomeSocial("NAO")}
                        />
                        Não
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-bold text-slate-800">Pessoa com deficiência?</div>
                    <div className="flex items-center gap-6 text-sm">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="pcd"
                          checked={pcd === "SIM"}
                          onChange={() => setPcd("SIM")}
                        />
                        Sim
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="pcd"
                          checked={pcd === "NAO"}
                          onChange={() => setPcd("NAO")}
                        />
                        Não
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link href="/termos" className="text-sm text-[#2D74B2] hover:underline">
                      Clique aqui para ler os nossos termos
                    </Link>

                    <label className="flex items-start gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={aceitaTermos}
                        onChange={(e) => setAceitaTermos(e.target.checked)}
                      />
                      <span>Li e aceito os termos de uso e política de dados da UNICON</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Área de Interesse */}
          <section className="relative rounded-[18px] border-2 border-[#2D74B2] bg-white">
            <FloatingTitle>Área de Interesse</FloatingTitle>

            <div className="p-7 sm:p-8 pt-10">
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  className={selectBase}
                  value={formaIngresso}
                  onChange={(e) => setFormaIngresso(e.target.value)}
                >
                  <option value="">Selecione a Forma de Ingresso</option>
                  <option value="vestibular">Vestibular</option>
                  <option value="enem">ENEM</option>
                  <option value="transferencia">Transferência</option>
                  <option value="segunda_graduacao">2ª Graduação</option>
                </select>

                <select
                  className={selectBase}
                  value={modalidade}
                  onChange={(e) => setModalidade(e.target.value)}
                >
                  <option value="">Selecione a Modalidade</option>
                  <option value="presencial">Presencial</option>
                  <option value="ead">EAD</option>
                  <option value="hibrido">Híbrido</option>
                </select>

                <select
                  className={selectBase}
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                >
                  <option value="">Selecione o Campus</option>
                  <option value="centro">Centro</option>
                  <option value="barra">Barra</option>
                  <option value="zonaSul">Zona Sul</option>
                </select>

                <select
                  className={selectBase}
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                >
                  <option value="">Selecione o Curso</option>
                  <option value="concierge">Gestão de Concierge</option>
                  <option value="hospitalidade">Hospitalidade</option>
                  <option value="eventos">Eventos</option>
                </select>

                <div className="md:col-span-1">
                  <select
                    className={selectBase}
                    value={turno}
                    onChange={(e) => setTurno(e.target.value)}
                  >
                    <option value="">Selecione o Turno</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </div>

                <div className="hidden md:block" />
              </div>
            </div>
          </section>

          {/* Avançar */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onAdvance}
              disabled={!canAdvance}
              className={[
                "w-full max-w-[780px] h-11 rounded-full font-semibold text-white transition",
                canAdvance
                  ? "bg-[#2D74B2] hover:bg-[#2D74B2]/90"
                  : "bg-slate-300 cursor-not-allowed",
              ].join(" ")}
            >
              Avançar
            </button>
          </div>
        </div>
      </div>

      {/* Rodapé azul como a referência */}
      <div className="mt-10 bg-[#2D74B2]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-8 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4" />
            <span>21 9999-9999</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <MessageCircle className="w-4 h-4" />
            <span>Precisa de ajuda?</span>
          </div>
        </div>
      </div>
    </div>
  )
}
