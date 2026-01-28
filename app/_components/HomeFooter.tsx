/* eslint-disable @next/next/no-html-link-for-pages */
import { Logo } from "@/app/_components/Logo"

export function HomeFooter() {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Logo light className="mb-6" />
            <p className="text-gray-400 max-w-sm">
              Transformando o atendimento em arte. A primeira universidade dedicada exclusivamente à formação de concierges e gestores de hospitalidade.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-[#FDBE00]">Links Rápidos</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white">
                  Nossos Cursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Processo Seletivo
                </a>
              </li>
              <li>
                <a href="/login/student" className="hover:text-white">
                  Portal do Aluno
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-[#FDBE00]">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li>contato@unicon.edu.br</li>
              <li>+55 (21) 9999-9999</li>
              <li>Av. Dulcidio Cardos, 1000 - RJ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © 2026 UNICON. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}