import { sidebar_data } from "@/app/[locale]/docs/data/data"

export interface BreadcrumbItem {
  label: string
  href?: string // href를 선택적으로 변경
}

export function generateBreadcrumbs(slug: string[]): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = []

  const fullPath = `/docs/${slug.join("/")}`

  const section = sidebar_data.find((sec) => sec.items.some((item) => item.href === fullPath))

  if (section) {
    // 섹션은 href 없이 (클릭 불가)
    breadcrumbs.push({
      label: section.title,
    })

    const currentPage = section.items.find((item) => item.href === fullPath)
    if (currentPage) {
      breadcrumbs.push({
        label: currentPage.title,
        href: currentPage.href,
      })
    }
  }

  return breadcrumbs
}
