import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import { Callout } from "@/app/[locale]/docs/components/mdx/Callout"

const components: MDXComponents = {
  // 제목 스타일
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold my-6 text-foreground" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl font-semibold my-5 text-foreground" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-semibold my-4 text-foreground" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-semibold my-3 text-foreground" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="text-base font-semibold my-2 text-foreground" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="text-sm font-semibold my-1 text-foreground" {...props}>
      {children}
    </h6>
  ),

  // 단락 스타일
  p: ({ children, ...props }) => (
    <p className="leading-7" {...props}>
      {children}
    </p>
  ),

  // 리스트 스타일
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7 text-foreground" {...props}>
      {children}
    </li>
  ),

  // 코드 스타일
  code: ({ children, className, ...props }) => {
    const isInline = !className
    return isInline ? (
      <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-sm font-mono" {...props}>
        {children}
      </code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }) => (
    <pre className="mb-4 p-4 bg-muted rounded-lg overflow-x-auto border border-border" {...props}>
      {children}
    </pre>
  ),

  // 인용구 스타일
  blockquote: ({ children, ...props }) => (
    <blockquote className="mb-4 pl-4 border-l-4 border-primary italic text-muted-foreground" {...props}>
      {children}
    </blockquote>
  ),

  // 링크 스타일
  a: ({ children, href, ...props }) => (
    <a href={href} className="text-primary hover:underline underline-offset-4" {...props}>
      {children}
    </a>
  ),

  // 구분선 스타일
  hr: ({ ...props }) => <hr className="my-6 border-border" {...props} />,

  // 강조 스타일
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-foreground" {...props}>
      {children}
    </em>
  ),

  // 이미지 스타일
  img: (props) => {
    const { src, alt = "", ...rest } = props as any

    if (typeof src !== "string") return null

    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto rounded-lg my-4 overflow-hidden border"
        {...rest}
      />
    )
  },

  // 테이블 스타일
  table: ({ children, ...props }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
  tr: ({ children, ...props }) => (
    <tr className="border-b border-border" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-2 text-left font-semibold text-foreground border border-border" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-2 text-foreground border border-border" {...props}>
      {children}
    </td>
  ),
  Callout,
}

export function useMDXComponents(): MDXComponents {
  return components
}

export function getMDXComponents(): MDXComponents {
  return components
}
