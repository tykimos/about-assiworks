import { getAllDocSlugs, getDocBySlug, getPrevNextDoc } from "@/lib/mdx"
import { getMDXComponents } from "@/mdx-components"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import DocNavigation from "../components/DocNavigation"

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: doc.meta.title,
    description: doc.meta.description,
  }
}

export default async function Docs({ params }: PageProps) {
  const { slug } = await params
  const doc = await getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const components = getMDXComponents()
  const { prevDoc, nextDoc } = getPrevNextDoc(slug)

  return (
    <div className="w-full lg:pt-6 lg:pl-16 lg:pr-14 px-2 py-2 lg:pb-16">
      <article>
        <MDXRemote source={doc.content} components={components} />
      </article>
      <div className="my-14">
        <DocNavigation prevDoc={prevDoc} nextDoc={nextDoc} />
      </div>
    </div>
  )
}
