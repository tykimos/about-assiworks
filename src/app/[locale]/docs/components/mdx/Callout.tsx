import { Info, Lightbulb } from "lucide-react"
import React from "react"

type CalloutType = "note" | "tip" | "warning"

interface CalloutProps {
  type: CalloutType
  children: React.ReactNode
}

export function Callout({ type, children }: CalloutProps) {
  const configs = {
    note: {
      icon: Info,
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      title: "text-[#1976D2] dark:text-blue-100",
      label: "Note",
    },
    tip: {
      icon: Lightbulb,
      bg: "bg-yellow-50 dark:bg-yellow-950",
      border: "border-yellow-200 dark:border-yellow-800",
      title: "text-[#F57C00] dark:text-yellow-100",
      label: "Tip",
    },
    warning: {
      icon: Info,
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      title: "text-red-900 dark:text-red-100",
      label: "Warning",
    },
  }

  const config = configs[type]
  const Icon = config.icon

  return (
    <div className={`mb-4 p-4 ${config.bg} border ${config.border} rounded-lg`}>
      <div className="flex gap-3">
        <Icon className={`size-5 mt-0.5 ${config.title} shrink-0`} />
        <div className="flex-1">
          <div className={`font-semibold ${config.title} mb-1`}>{config.label}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
