"use client"

import LogoSymbol from "@/assets/icons/logo-symbol.svg"
import LogoWordmark from "@/assets/icons/logo-wordmark.svg"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MobileSheet } from "../shared/MobileSheet"
import HeaderNavSidebar from "../shared/HeaderNavSidebar"

export default function Header({ isFixed = false }: { isFixed?: boolean }) {
  const router = useRouter()

  return (
    <header
      className={`${isFixed ? "fixed" : "sticky"} top-0 left-0 w-full md:h-[70px] h-[60px] z-50 transition-colors duration-300 bg-white border-b`}
    >
      <div className="flex justify-between items-center w-[94%] max-w-[1400px] h-full mx-auto">
        <div className="flex gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <LogoSymbol className="size-9" />
          <LogoWordmark className="w-36 transition-colors duration-300 fill-[#2D2D2D]" />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <nav aria-label="메뉴">
            <ul role="list">
              <li className="p-4 rounded-md transition-all cursor-pointer font-semibold hover:text-blue-500 text-black">
                <Link href="/docs/getting-started/signup">가이드</Link>
              </li>
            </ul>
          </nav>
          <Link
            href="https://assiworks.aifactory.space"
            target="_blank"
            className="flex justify-center items-center gap-1 pl-6 pr-5 py-3 rounded-full transition-colors bg-[linear-gradient(88deg,#07F_34.48%,#0262CF_90.58%)] text-white hover:bg-gray-800"
            prefetch={false}
          >
            <span className="font-semibold">시작하기</span>
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
        <MobileSheet side="right" triggerClassName="lg:hidden" sidebarClassName="w-full max-w-[430px]" hideClose>
          <HeaderNavSidebar />
        </MobileSheet>
      </div>
    </header>
  )
}
