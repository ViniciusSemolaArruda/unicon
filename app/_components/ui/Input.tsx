/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/app/_lib/cn"


export function Input({
label,
type = "text",
placeholder,
className,
value,
onChange,
}: any) {
return (
<div className="w-full">
{label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
<input
type={type}
className={cn(
"w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2D74B2] focus:border-transparent transition-all outline-none",
className
)}
placeholder={placeholder}
value={value}
onChange={onChange}
/>
</div>
)
}