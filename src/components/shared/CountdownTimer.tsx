"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TimeUnit {
  value: number
  label: string
}

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ])

  useEffect(() => {
    const target = new Date(targetDate)

    const updateTime = () => {
      setTimeLeft(calculateTimeLeft(target))
    }

    // 즉시 한 번 실행
    updateTime()

    // 이후 1초마다 실행
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mb-12 xl:mb-16 2xl:mb-20"
      >
        <div className="flex w-full justify-center gap-2 sm:gap-4">
          {timeLeft.map((unit, index) => (
            <div
              key={unit.label}
              className="flex flex-col justify-center items-center relative aspect-[1.06] text-[70px] sm:gap-4 gap-2 bg-linear-to-b from-white/10 to-gray-800/30 border border-white/10 rounded-2xl px-4 py-3"
              style={{ width: "clamp(70px, 18vw, 256px)" }}
            >
              <div
                className="absolute inset-0 rounded-2xl border-gradient-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={unit.value}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-white relative z-10"
                  style={{
                    fontSize: "clamp(30px, 8vw, 120px)",
                    lineHeight: "clamp(30px, 8vw, 120px)",
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.div>
              </AnimatePresence>
              <span className="text-white relative z-10" style={{ fontSize: "clamp(12px, 1.5vw, 34.5px)" }}>
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function calculateTimeLeft(targetDate: Date): TimeUnit[] {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    // 목표 날짜가 지났으면 모두 0 반환
    return [
      { value: 0, label: "Days" },
      { value: 0, label: "Hours" },
      { value: 0, label: "Minutes" },
      { value: 0, label: "Seconds" },
    ]
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ]
}
