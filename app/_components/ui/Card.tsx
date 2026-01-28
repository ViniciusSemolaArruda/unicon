import { cn } from "@/app/_lib/cn"


export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
return (
<div className={cn("bg-white rounded-xl shadow-md border border-[#9BC1E5]/20 overflow-hidden", className)}>
{children}
</div>
)
}