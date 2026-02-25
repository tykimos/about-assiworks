"use client"

import { Button } from "@/components/ui/button"
import { EllipsisVertical, X } from "lucide-react"
import { useDocStore } from "../../store/doc-store"
import { DocBreadcrumb } from "../DocBreadcrumb"

export default function MobileDocHeader() {
  const isOpen = useDocStore((state) => state.isOpen)
  const setIsOpen = useDocStore((state) => state.setIsOpen)

  return (
    <div className="lg:hidden flex items-center gap-2 sticky md:top-[70px] top-[60px] w-full md:h-[70px] h-[60px] border-b px-2 bg-white">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="size-4" /> : <EllipsisVertical className="size-4" />}
      </Button>
      <DocBreadcrumb />
    </div>
  )
}
