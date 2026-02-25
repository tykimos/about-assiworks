export default function ExampleCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.07)] p-8 rounded-xl">
      <div className="flex justify-center items-center md:size-[80px] size-[60px] bg-[rgba(255,255,255,0.06)] rounded-full">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <span className="md:text-[28px] text-[22px] text-white font-semibold">{title}</span>
        <p className="md:text-[18px] text-[14px] text-gray-200">{description}</p>
      </div>
    </div>
  )
}
