"use client"


import { cn } from "@/app/_lib/cn"


export function Button({
children,
variant = "primary",
className,
onClick,
type = "button",
fullWidth = false,
size = "md",
}: {
children: React.ReactNode
variant?: "primary" | "secondary" | "outline" | "danger" | "ghost"
className?: string
onClick?: () => void
type?: "button" | "submit"
fullWidth?: boolean
size?: "sm" | "md" | "lg"
}) {
const base =
"inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"


const variants = {
primary: "bg-[#2D74B2] text-white hover:bg-[#235c8f] focus:ring-[#2D74B2]",
secondary: "bg-[#FDBE00] text-[#111827] hover:bg-[#e0a800] focus:ring-[#FDBE00]",
outline:
"border-2 border-[#2D74B2] text-[#2D74B2] hover:bg-[#2D74B2] hover:text-white focus:ring-[#2D74B2]",
danger: "bg-[#FC0000] text-white hover:bg-[#d60000] focus:ring-[#FC0000]",
ghost: "bg-transparent text-[#2D74B2] hover:bg-[#9BC1E5]/20 focus:ring-[#2D74B2]",
}


const sizes = {
sm: "px-3 py-1.5 text-sm",
md: "px-5 py-2.5 text-base",
lg: "px-6 py-3.5 text-lg",
}


return (
<button
type={type}
className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
onClick={onClick}
>
{children}
</button>
)
}