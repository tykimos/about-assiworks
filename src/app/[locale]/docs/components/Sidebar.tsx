"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link, usePathname } from "@/i18n/routing"
import { useMemo, useState } from "react"
import { sidebar_data } from "../data/data"

interface SidebarProps {
  linkClickHandler?: () => void
}

export default function Sidebar({ linkClickHandler }: SidebarProps) {
  const pathname = usePathname()

  // 현재 경로를 포함하는 섹션들을 계산 (파생 상태)
  const activeSegments = useMemo(() => {
    return sidebar_data.filter((section) => pathname.includes(`/${section.segment}`)).map((section) => section.segment)
  }, [pathname])

  // 사용자가 수동으로 열고 닫은 섹션들을 추적
  const [manuallyOpenedSections, setManuallyOpenedSections] = useState<string[]>([])

  // 실제로 열려 있어야 할 섹션들 = 활성 섹션 + 수동으로 연 섹션
  const openSections = useMemo(() => {
    const combined = [...new Set([...activeSegments, ...manuallyOpenedSections])]
    return combined
  }, [activeSegments, manuallyOpenedSections])

  return (
    <ScrollArea className="w-full h-full min-h-0 [&_[data-radix-scroll-area-viewport]>div]:block!">
      <Accordion
        type="multiple"
        value={openSections}
        // onValueChange={setOpenSections}
        onValueChange={setManuallyOpenedSections}
        className="w-full space-y-2 border-none p-3"
      >
        {sidebar_data.map((section) => (
          <AccordionItem key={section.segment} value={section.segment} className="border-none">
            <AccordionTrigger className="flex items-center justify-between w-full px-3 py-3 text-left hover:no-underline hover:bg-gray-50 rounded-lg transition-colors group">
              <span className="font-medium text-gray-700">{section.title}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <ul className="mt-1 space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block ml-2 px-4 py-2.5 text-[14px] rounded-lg transition-colors ${
                          isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-50"
                        }`}
                        onClick={linkClickHandler}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  )
}
