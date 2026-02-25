import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface DocNavigationProps {
  prevDoc: {
    slug: string
    title: string
  } | null
  nextDoc: {
    slug: string
    title: string
  } | null
}

export default function DocNavigation({ prevDoc, nextDoc }: DocNavigationProps) {
  return (
    <nav aria-label="문서 네비게이션" className="flex justify-between items-center w-full">
      {prevDoc ? (
        <Link href={prevDoc.slug} className="flex items-center gap-1 font-semibold text-zinc-600 hover:underline">
          <ChevronLeft className="size-5" />
          {prevDoc.title}
        </Link>
      ) : (
        <span className="invisible">← placeholder</span>
      )}
      {nextDoc ? (
        <Link href={nextDoc.slug} className="flex items-center gap-1 font-semibold text-zinc-600 hover:underline">
          {nextDoc.title}
          <ChevronRight className="size-5" />
        </Link>
      ) : (
        <span className="invisible">placeholder →</span>
      )}
    </nav>
  )
}
