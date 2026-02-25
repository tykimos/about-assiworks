export interface SidebarItem {
  title: string
  href: string
}

export interface SidebarSection {
  title: string
  segment: string
  items: SidebarItem[]
}

export const sidebar_data: SidebarSection[] = [
  {
    title: "시작하기",
    segment: "getting-started",
    items: [
      { title: "회원가입 및 시작하기", href: "/docs/getting-started/signup" },
      { title: "Tool 만들기", href: "/docs/getting-started/create-tool" },
      { title: "ToolChain 만들기", href: "/docs/getting-started/create-toolchain" },
      { title: "Agent 만들기", href: "/docs/getting-started/create-agent" },
    ],
  },
  {
    title: "핵심 개념",
    segment: "concepts",
    items: [
      { title: "Unit", href: "/docs/concepts/unit" },
      { title: "Tool", href: "/docs/concepts/tool" },
      { title: "ToolChain", href: "/docs/concepts/toolchain" },
      { title: "Agent", href: "/docs/concepts/agent" },
    ],
  },
  {
    title: "확장 기능",
    segment: "expanded-functions",
    items: [
      { title: "RAG & Vector DB 연동", href: "/docs/expanded-functions/rag-vector-db" },
      { title: "스케줄링", href: "/docs/expanded-functions/scheduling" },
    ],
  },
  {
    title: "실전 시나리오",
    segment: "scenarios",
    items: [{ title: "메일링 자동화", href: "/docs/scenarios/mailing-automation" }],
  },
  {
    title: "업데이트",
    segment: "update",
    items: [
      { title: "최신 업데이트 내역", href: "/docs/update/latest-updates" },
      { title: "업데이트 히스토리", href: "/docs/update/update-history" },
    ],
  },
]
