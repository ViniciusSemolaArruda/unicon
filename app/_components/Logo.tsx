import Image from "next/image"
import { cn } from "@/app/_lib/cn"

type LogoProps = {
  className?: string
  light?: boolean
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-bold text-xl tracking-tight",
        className
      )}
    >
      <Image
  src="/logo.png"
  alt="UNICON"
  width={202}
  height={12}
  className="w-[202px] sm:w-[202px] h-auto object-contain"
  priority
/>

      
    </div>
  )
}