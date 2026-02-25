import { cn } from "@/lib/utils"

interface UnitIconProps {
  icon: React.ReactNode
  backgroundColor: string
  glow?: boolean
  className?: string
}

export default function UnitIcon({ icon, backgroundColor, glow = false, className }: UnitIconProps) {
  return (
    <div
      className={cn("flex items-center justify-center size-30 rounded-4xl border-2 border-white/20", className)}
      style={{
        backgroundColor: backgroundColor,
        boxShadow: glow ? `0 0 79.7px 15px ${backgroundColor}BF` : undefined,
      }}
    >
      {icon}
    </div>
  )
}
