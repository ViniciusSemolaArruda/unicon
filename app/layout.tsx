import "./globals.css"
import WhatsappFloat from "./_components/WhatsappFloat/WhatsappFloat"

export const metadata = {
  title: "UNICON",
  description: "Universidade de Concierges",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white font-sans text-gray-900">
        {children}
        <WhatsappFloat />
      </body>
    </html>
  )
}