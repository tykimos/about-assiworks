"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { getMDXComponents } from "@/mdx-components"

interface LegalContentProps {
  source: MDXRemoteSerializeResult
}

export function LegalContent({ source }: LegalContentProps) {
  const components = getMDXComponents()

  return (
    <div className="prose prose-sm w-full h-full overflow-y-auto thin-scrollbar pr-2">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
