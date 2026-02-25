import AiToolIcon from "@/assets/icons/ai-tool.svg"
import CircleIcon from "@/assets/icons/circle.svg"
import GradientSymbol from "@/assets/icons/gradient-symbol.svg"
import TeamIcon from "@/assets/icons/team.svg"
import WorkflowIcon from "@/assets/icons/workflow.svg"
import { Link } from "@/i18n/routing"
import { ArrowUpRight } from "lucide-react"
import ExampleCard from "./components/ExampleCard"
import ProcessCard from "./components/ProcessCard"
import TimelineSteps from "./components/TimelineSteps"
import UnitIcon from "./components/UnitIcon"
import { TeamProcessData, timelineSteps, WorkflowProcessData } from "./data/data"

export default function Home() {
  return (
    <main>
      <section data-theme="light" className="flex flex-col items-center relative">
        <div
          className="absolute -top-[55%] right-0 size-[80%] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(201, 193, 244, 0.5) 0%, rgba(201, 227, 244, 0.5) 100%)",
          }}
        />
        <div className="flex flex-col items-center relative z-10 w-[90%] md:pt-40 pt-30">
          <div className="flex flex-col md:gap-4 gap-3 text-center">
            <p className="md:text-[54px] text-[38px] md:leading-[54px] leading-[38px] text-zinc-800">기능이 아닌,</p>
            <p className="md:text-[54px] text-[38px] md:leading-[54px] leading-[38px] text-zinc-800 break-keep">
              <b>당신의 업무 시스템</b>을 만듭니다.
            </p>
            <p className="md:text-[18px] text-[14px] text-gray-600 mt-4">
              반복되는 업무, 이제 도구가 아닌 AI 직원에게 맡기세요. 어시웍스는 나만의 AI 전문가를 육성하는 인력 관리
              솔루션입니다.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-4 gap-2 mt-14 mb-12">
            <Link
              href=""
              target="_blank"
              className="flex justify-center items-center gap-2 pl-6 px-4 py-3 bg-[linear-gradient(88deg,#07F_34.48%,#0262CF_90.58%)] text-white md:text-[16px] text-[14px] font-bold rounded-full transition-colors"
              prefetch={false}
            >
              <span>AI 직원 채용하기</span>
              <ArrowUpRight />
            </Link>
            <Link
              href="/docs/getting-started/signup"
              className="flex justify-center items-center gap-2 pl-6 px-4 py-3 bg-white border border-gray-200 text-zinc-800 md:text-[16px] text-[14px] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <span>사용법 알아보기</span>
              <ArrowUpRight />
            </Link>
          </div>
          <div className="flex justify-center items-center w-full max-w-[1400px] aspect-3/1 mt-8 rounded-2xl border-zinc-300 bg-gray-200">
            Image Placeholder
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center w-full h-[220px]">
          <span className="self-center font-semibold text-xl bg-linear-to-r from-[#0174F8] to-[#34333C] bg-clip-text text-transparent">
            어시웍스와 함께한 기업
          </span>
          <div className="flex justify-between gap-12 w-[90%] max-w-[1400px] mx-auto">
            <div className="size-24 bg-gray-100 rounded-xl" />
            <div className="size-24 bg-gray-100 rounded-xl" />
            <div className="size-24 bg-gray-100 rounded-xl" />
            <div className="size-24 bg-gray-100 rounded-xl" />
            <div className="size-24 bg-gray-100 rounded-xl" />
          </div>
        </div>
      </section>
      <section data-theme="dark" className="flex justify-center items-center md:py-32 py-24 bg-zinc-900">
        <div className="flex flex-col gap-12 w-[90%] max-w-[900px] mb-4">
          <span className="md:text-[34px] text-[29px] text-white font-semibold">
            AI는 똑똑한데, 왜 내 일은 못 도와줄까요?
          </span>
          <div className="flex md:flex-row flex-col md:gap-8 gap-4 break-keep">
            <ExampleCard
              icon={<CircleIcon className="md:size-[38px] size-[28px]" />}
              title="우리 회사 사정을 모르는 AI."
              description="범용 AI는 내부 데이터를 모릅니다. 우리 회사만의 문서, 프로세스, 업무 방식을 이해하지 못합니다."
            />
            <ExampleCard
              icon={<AiToolIcon className="md:size-[38px] size-[28px]" />}
              title="반복 업무에 시간을 쏟고 있어요."
              description="뉴스 취합, 메일 분류 등 매일 반복되는 업무의 비효율성. 더 중요한 일에 집중할 시간이 부족합니다."
            />
          </div>
        </div>
      </section>
      <section data-theme="light" className="flex flex-col items-center py-36 gradient-overlay">
        <div className="w-[90%] max-w-[1000px]">
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-xl bg-linear-to-r from-[#1E81FF] to-[#4F39F6] bg-clip-text text-transparent">
              준비물은 당신의 아이디어 하나뿐입니다. 나머지는 어시웍스가 해결합니다.
            </span>
            <span className="font-bold text-4xl">5단계로 끝내는 업무 자동화의 기적</span>
          </div>
          <TimelineSteps mainTitle="신규 입사자 온보딩 AI" mainIcon={<GradientSymbol />} steps={timelineSteps} />
        </div>
      </section>
      <section data-theme="dark" className="flex justify-center items-center py-36 bg-[#1E1C2C]">
        <div className="flex flex-col items-center gap-34 w-[90%] max-w-[1000px]">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xl text-white">🚀 Coming Next: 더 거대해질 당신의 세계</span>
            <h2 className="text-4xl font-bold text-white">{"[ Next Level : Coming Soon ]"}</h2>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center basis-1/2 gap-6">
              <UnitIcon icon={<TeamIcon className="size-22 fill-white" />} backgroundColor="#702EFF" glow />
              <div className="flex flex-col text-center mt-8">
                <span className="text-white text-2xl leading-5 min-h-10">
                  <b>Team (팀)</b> 협력하는 AI 전문가 그룹
                </span>
                <p className="text-white break-keep leading-5 min-h-20">
                  서로 다른 능력을 가진 에이전트들이 사람처럼 대화하고 협력합니다.
                </p>
              </div>
              <ProcessCard {...TeamProcessData} />
            </div>
            <div className="flex flex-col items-center basis-1/2 gap-6">
              <UnitIcon icon={<WorkflowIcon className="size-22 fill-white" />} backgroundColor="#2E89FF" glow />
              <div className="flex flex-col text-center mt-8">
                <span className="text-white text-2xl leading-5 min-h-10">
                  <b>Workflow (워크플로우)</b> 자동화의 최종 설계도
                </span>
                <span className="text-white break-keep leading-5 min-h-20">
                  도구, 툴체인, 에이전트, 팀... 이 모든 것을 아우르는 최상위 설계도를 그리세요.
                </span>
              </div>
              <ProcessCard {...WorkflowProcessData} />
            </div>
          </div>
        </div>
      </section>
      <section data-theme="light" className="flex flex-col items-center gap-6 py-22">
        <div className="flex flex-col gap-1">
          <p className="break-keep">당신은 더 중요한 일에 집중하세요.</p>
          <p className="break-keep">반복 업무는 AI 직원에게 맡기세요.</p>
        </div>
        <div className="flex gap-4">
          <Link
            href=""
            target="_blank"
            className="flex justify-center items-center gap-2 h-[48px] pl-6 p-4 bg-[linear-gradient(88deg,#07F_34.48%,#0262CF_90.58%)] text-white font-bold rounded-full transition-colors"
            prefetch={false}
          >
            <span>어시웍스 시작하기</span>
            <ArrowUpRight />
          </Link>
          <a
            href="mailto:contact@aifactory.page"
            className="flex justify-center items-center gap-2 h-[48px] pl-6 p-4 bg-white border border-gray-200 text-zinc-800 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            비즈니스 문의
            <ArrowUpRight />
          </a>
          <a
            href="mailto:cs@aifactory.page"
            className="flex justify-center items-center gap-2 h-[48px] pl-6 p-4 bg-white border border-gray-200 text-zinc-800 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            사용 문의
            <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  )
}
