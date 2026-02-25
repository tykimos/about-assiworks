"use client"

import LogoSymbol from "@/assets/icons/logo-symbol.svg"
import LogoWordmark from "@/assets/icons/logo-wordmark.svg"
import { useDialog } from "@/hooks/useDialog"
import { LegalContent } from "../legal/LegalContent"
import { getLegalContent } from "@/actions/getLegalContent"

export default function Footer() {
  const { show } = useDialog()

  const tosClick = async () => {
    const { source } = await getLegalContent("terms")
    show({
      title: "이용 약관",
      component: <LegalContent source={source} />,
      sizeClassName: "w-[800px] max-h-[80vh]",
    })
  }

  const privacyPolicyClick = async () => {
    const { source } = await getLegalContent("privacy")
    show({
      title: "개인정보처리방침",
      component: <LegalContent source={source} />,
      sizeClassName: "w-[800px] max-h-[80vh]",
    })
  }

  return (
    <footer className="w-full bg-[#F9FAFB]">
      <div className="flex flex-col md:gap-6 gap-12 w-[94%] max-w-[1400px] mx-auto py-20">
        <div className="flex md:flex-row flex-col md:gap-0 gap-12 justify-between md:items-center w-full">
          <span>서울특별시 중구 세종대로18길 16, 804호</span>
          <nav aria-label="푸터 메뉴">
            <ul role="list" className="flex md:flex-row flex-col md:gap-4 gap-2">
              {/* <li>Company</li> */}
              <li className="px-3 py-2 hover:text-slate-600 cursor-pointer" onClick={tosClick}>
                이용약관
              </li>
              <li className="px-3 py-2 hover:text-slate-600 cursor-pointer" onClick={privacyPolicyClick}>
                개인정보처리방침
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full">
          <div className="flex gap-2">
            <LogoSymbol className="size-9" />
            <LogoWordmark className="fill-[#2D2D2D]" width={158} height={34} />
          </div>
          <span className="text-sm text-gray-500">© 2026 Assiworks. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
