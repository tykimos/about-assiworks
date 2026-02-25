"use client"

import Header from "@/components/layout/Header"
import { useDocStore } from "../../store/doc-store"
import Sidebar from "../Sidebar"
import MobileDocHeader from "./MobileDocHeader"

export default function ExpandedDocPage() {
  const isOpen = useDocStore((state) => state.isOpen)
  const setIsOpen = useDocStore((state) => state.setIsOpen)

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-20 block lg:hidden">
      <Header isFixed />
      <MobileDocHeader />
      <div
        className="w-full md:h-[calc(100vh-70px)] h-[calc(100vh-60px)] md:mt-[70px] mt-[60px] backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div className="w-full sm:max-w-[430px] h-full bg-white sm:border-r border-gray-200">
          <Sidebar linkClickHandler={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  )
}
