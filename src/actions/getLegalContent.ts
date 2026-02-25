"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"

const legalDirectory = path.join(process.cwd(), "content/legal")

export async function getLegalContent(type: "terms" | "privacy") {
  const filePath = path.join(legalDirectory, `${type}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  return {
    meta: data,
    source: mdxSource,
  }
}
