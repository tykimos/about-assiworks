import AgentIcon from "@/assets/icons/agent.svg"
import InputIcon from "@/assets/icons/input.svg"
import ScheduleIcon from "@/assets/icons/schedule.svg"
import StorageIcon from "@/assets/icons/storage.svg"
import TeamIcon from "@/assets/icons/team.svg"
import ToolIcon from "@/assets/icons/tool.svg"
import ToolchainIcon from "@/assets/icons/toolchain.svg"
import WorkflowIcon from "@/assets/icons/workflow.svg"
import Image from "next/image"

export const timelineSteps = [
  {
    title: "가르치기 Create Tools",
    description: "AI에게 글쓰기, 검색하기 같은 기초 능력을 부여하세요.",
    icon: <ToolIcon className="size-7 fill-[#702EFF]" />,
    content: <Image src="/step1.webp" alt="Step 1" fill />,
  },
  {
    title: "업로드하기 Add Data",
    description: "폴더를 만들고, AI가 참고해야 할 회사 규정이나 문서를 업로드하세요.",
    icon: <StorageIcon className="size-8 fill-[#702EFF]" />,
    content: <div className="" />,
  },
  {
    title: "이어주기 Connect Chains",
    description: '"검색하고 → 요약해서 → 메일 보내" 처럼 할 일을 순서대로 이어주세요.',
    icon: <ToolchainIcon className="size-8 fill-[#702EFF]" />,
    content: <div className="" />,
  },
  {
    title: "말거두기 Activate Agent",
    description: "스스로 판단해서 필요한 정보를 제공하게 합니다.",
    icon: <AgentIcon className="size-8 fill-[#702EFF]" />,
    content: <div className="" />,
  },
  {
    title: "반복하기 Set Schedule",
    description: "정기적으로 챙겨줘야 할 일을 자동화합니다.",
    icon: <ScheduleIcon className="size-7 fill-[#702EFF]" />,
    content: <div className="" />,
  },
]

export const TeamProcessData = {
  icon: <TeamIcon className="size-5 fill-white" />,
  backgroundColor: "#702EFF",
  title: "온보딩 팀",
  subtitle: "각 에이전트가 일하는 중 입니다..",
  steps: [
    {
      icon: <AgentIcon className="size-5 fill-white" />,
      title: "문서 검색 에이전트",
      description: "문서 검색 중...",
      status: "active" as const,
    },
    {
      icon: <AgentIcon className="size-5 fill-white" />,
      title: "친절한 답변 에이전트",
      description: "답변 만드는 중...",
      status: "active" as const,
    },
    {
      icon: <AgentIcon className="size-5 fill-white" />,
      title: "일정 관리 에이전트",
      description: "일정 등록 완료",
      status: "completed" as const,
    },
  ],
}

export const WorkflowProcessData = {
  icon: <WorkflowIcon className="size-5 fill-white" />,
  backgroundColor: "#2E89FF",
  title: "온보딩 워크플로우",
  subtitle: "각 에이전트가 일하는 중 입니다..",
  steps: [
    {
      icon: <InputIcon className="size-6 fill-white" />,
      title: "HR 시스템",
      description: "입사자 정보 발생(트리거)",
      status: "active" as const,
    },
    {
      icon: <ToolchainIcon className="size-6 fill-white" />,
      title: "계정 생성 툴체인",
      description: "계정 만드는 중...",
      status: "active" as const,
    },
    {
      icon: <TeamIcon className="size-5 fill-white" />,
      title: "온보딩 AI 팀",
      description: "멘토링 할당 중...",
      status: "active" as const,
    },
    {
      icon: <ScheduleIcon className="size-5 fill-white" />,
      title: "스케줄링",
      description: "4주간의 [주간 체크인 스케줄] 자동 시작",
      status: "active" as const,
    },
  ],
}
