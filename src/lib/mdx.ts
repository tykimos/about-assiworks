import { sidebar_data } from "@/app/[locale]/docs/data/data"
import fs from "fs"
import matter from "gray-matter"
import path from "path"

const contentDirectory = path.join(process.cwd(), "content/docs")

export interface DocMeta {
  title: string
  description?: string
  date?: string
  [key: string]: any
}

export interface Doc {
  slug: string[]
  meta: DocMeta
  content: string
}

export function getDocPath(slug: string[]) {
  const fileName = slug.join("/") + ".mdx"
  return path.join(contentDirectory, fileName)
}

export async function getDocBySlug(slug: string[]): Promise<Doc | null> {
  try {
    const filePath = getDocPath(slug)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      meta: data as DocMeta,
      content,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export function getAllDocSlugs(): string[][] {
  const files = fs.readdirSync(contentDirectory)

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "").split("-")
      return slug
    })
}

export function getPrevNextDoc(currentSlug: string[]): {
  prevDoc: { slug: string; title: string } | null
  nextDoc: { slug: string; title: string } | null
} {
  const allDocs: { slug: string; title: string }[] = []

  sidebar_data.forEach((section) => {
    section.items.forEach((item) => {
      allDocs.push({
        slug: item.href,
        title: item.title,
      })
    })
  })

  const currentHref = `/docs/${currentSlug.join("/")}`
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentHref)

  if (currentIndex === -1) {
    return { prevDoc: null, nextDoc: null }
  }

  return {
    prevDoc: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    nextDoc: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  }
}
