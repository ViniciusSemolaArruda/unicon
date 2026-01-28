import { cn } from "@/app/_lib/cn"


export function Badge({
children,
color = "blue",
className,
}: {
children: React.ReactNode
color?: "blue" | "green" | "red" | "yellow"
className?: string
}) {
const colors = {
blue: "bg-[#9BC1E5]/20 text-[#2D74B2]",
green: "bg-[#91D04E]/20 text-[#5a862e]",
red: "bg-[#FC0000]/10 text-[#FC0000]",
yellow: "bg-[#FDBE00]/20 text-[#b58900]",
}
return <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold", colors[color], className)}>{children}</span>
}