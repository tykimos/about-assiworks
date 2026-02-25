import React from "react"

interface StepContent {
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
}

interface TimelineStepsProps {
  mainTitle: string
  mainIcon?: React.ReactNode
  steps: StepContent[]
}

const TimelineSteps: React.FC<TimelineStepsProps> = ({ mainTitle, mainIcon, steps }) => {
  return (
    <div className="w-full mt-20">
      {/* 메인 타이틀 */}
      <div className="relative flex items-center gap-3 mb-8">
        <div className="flex items-center gap-3 px-6 py-3 bg-[#F7F8FF] border border-gray-200 rounded-xl shadow-md">
          {mainIcon && <div className="text-2xl">{mainIcon}</div>}
          <h1 className="text-xl font-bold">{mainTitle}</h1>
        </div>
      </div>

      {/* 스텝 목록 */}
      <div className="relative">
        {/* 세로 연결선 */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6 mb-12">
            {/* 스텝 아이콘 */}
            <div className="flex items-center justify-center size-12 bg-white rounded-xl shadow-lg">{step.icon}</div>

            {/* 스텝 콘텐츠 */}
            <div className="flex-1 pt-2">
              <div className="mb-3">
                <h2 className="text-lg font-semibold mb-1">
                  Step {index + 1} : {step.title}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* 커스텀 콘텐츠 영역 */}
              <div className="relative bg-white aspect-video max-w-[632px] rounded-lg shadow-md p-6 overflow-hidden">
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineSteps
