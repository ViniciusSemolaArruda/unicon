// app/layout.tsx
"use client"

import "./globals.css"
import { usePathname } from "next/navigation"
import WhatsappFloat from "./_components/WhatsappFloat/WhatsappFloat"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // ❌ não mostrar no portal (aluno/professor/admin)
  const hideWhatsapp =
    pathname.startsWith("/portal") ||
    pathname.startsWith("/portal/student") ||
    pathname.startsWith("/portal/professor") ||
    pathname.startsWith("/portal/admin")

  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white font-sans text-gray-900">
        {children}
        {!hideWhatsapp && <WhatsappFloat />}
      </body>
    </html>
  )
}
