import WhiteLogoSymbol from "@/assets/icons/logo-symbol-white.svg"
import LiquidEther from "../LiquidEther"
import CountdownTimer from "../shared/CountdownTimer"

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col justify-center items-center relative w-screen h-screen bg-[#27272A] overflow-hidden">
      {/* 배경 컴포넌트 */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#F8FFE5", "#B980FF", "#8AA7FF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* 페이지 콘텐츠 */}
      <div className="relative z-10 flex flex-col w-[80%] max-w-[1400px] mx-auto items-center sm:gap-24 gap-18 sm:mb-0 mb-12 pointer-events-none">
        {/* 내부 요소들에서 다시 클릭이 가능하게 하려면 하위 요소에 pointer-events-auto 필요할 수 있음 */}
        <div className="flex flex-col items-center sm:gap-6 gap-12 pointer-events-auto">
          <WhiteLogoSymbol className="sm:w-[96px] w-[64px]" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white leading-[1.2] text-center" style={{ fontSize: "clamp(30px, 8vw, 60.5px)" }}>
              Something New Is On The Way
            </h1>
            <p className="text-white text-center" style={{ fontSize: "clamp(16px, 4vw, 21.6px)" }}>
              기능이 아닌, 당신의 업무 시스템을 만드는 어시웍스가 곧 당신의 곁으로 다가갑니다.
            </p>
          </div>
        </div>

        <div className="pointer-events-auto">
          <CountdownTimer targetDate="2026-03-03T00:00:00" />
        </div>
      </div>

      {/* 하단 문의 링크 */}
      <a
        href="mailto:cs@aifactory.page"
        className="z-10 flex gap-2 absolute bottom-10 left-1/2 -translate-x-1/2 text-base text-white mb-3 group hover:cursor-pointer pointer-events-auto"
      >
        <span>문의 </span>
        <span className="no-underline group-hover:underline">cs@aifactory.page</span>
      </a>
    </div>
  )
}
