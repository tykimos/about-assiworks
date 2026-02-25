import { Ellipsis } from "lucide-react"
import UnitIcon from "./UnitIcon"

interface Step {
  icon: React.ReactNode
  title: string
  description: string
  status: "active" | "completed" | "pending"
}

interface ProcessCardProps {
  icon: React.ReactNode
  backgroundColor: string
  title: string
  subtitle: string
  steps: Step[]
}

export default function ProcessCard({ icon, backgroundColor, title, subtitle, steps }: ProcessCardProps) {
  const getStatusColor = (status: Step["status"]) => {
    switch (status) {
      case "active":
        return "text-green-400"
      case "completed":
        return "text-blue-400"
      case "pending":
        return "text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-[600px] rounded-3xl border border-blue-500/30 bg-[#2A2838] p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UnitIcon
            icon={icon}
            backgroundColor={backgroundColor}
            glow={false}
            className="size-8 rounded-lg border-none"
          />
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        <Ellipsis className="size-6 text-white" />
      </div>

      {/* 서브타이틀 */}
      <div className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-4 py-3">
        <p className="text-sm text-white">{subtitle}</p>
      </div>

      {/* 스텝 리스트 */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4 rounded-2xl bg-[#3A3847] px-4 py-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#2A2838]">{step.icon}</div>
            <div className="flex-1">
              <h3 className="mb-1 text-base font-medium text-white">{step.title}</h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs ${getStatusColor(step.status)}`}>●</span>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
