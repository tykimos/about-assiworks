"use client"

import LogoSymbol from "@/assets/icons/logo-symbol.svg"
import LogoWordmark from "@/assets/icons/logo-wordmark.svg"
import { SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HeaderNavSidebar() {
  const router = useRouter()

  return (
    <div className="flex flex-col size-full bg-white">
      <div className="flex justify-between items-center w-full h-[60px] px-4 border-b">
        <div className="flex gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <LogoSymbol className="size-9" />
          <LogoWordmark className="w-36 transition-colors duration-300 fill-[#2D2D2D]" />
        </div>
        <SheetClose asChild>
          <button className="p-2">
            <X className="size-6" />
            <span className="sr-only">닫기</span>
          </button>
        </SheetClose>
      </div>
      <nav aria-label="메뉴" className="flex-1 overflow-y-auto">
        <ul role="list">
          <li className="flex flex-col text-lg px-2 py-4 rounded-md transition-all cursor-pointer font-semibold text-black">
            <SheetClose asChild>
              <Link href="/docs/getting-started/signup" className="w-fit px-4 py-2 hover:text-blue-500">
                유저 가이드
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="https://assiworks.aifactory.space"
                target="_blank"
                className="w-fit px-4 py-2 hover:text-blue-500"
                prefetch={false}
              >
                어시웍스 시작하기
              </Link>
            </SheetClose>
          </li>
        </ul>
      </nav>
    </div>
  )
}
