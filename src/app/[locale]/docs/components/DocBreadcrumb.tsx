"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "@/i18n/routing"
import { Fragment } from "react"
import { generateBreadcrumbs } from "../lib/breadcrumb"

export function DocBreadcrumb() {
  const pathname = usePathname()
  const breadcrumbs = pathname
    .replace(/^\/docs\/?/, "") // "/docs/" 제거
    .split("/")
    .filter(Boolean) // 빈 문자열 제거
  const items = generateBreadcrumbs(breadcrumbs)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isFirst = index === 0
          const hasHref = !!item.href

          return (
            <Fragment key={item.href || item.label}>
              <BreadcrumbItem className="text-[0.9rem]">
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : hasHref ? (
                  <BreadcrumbLink href={item.href}>
                    {isFirst ? (
                      <div className="flex items-center gap-1.5">
                        <span>{item.label}</span>
                      </div>
                    ) : (
                      item.label
                    )}
                  </BreadcrumbLink>
                ) : (
                  <span className="text-gray-500">{item.label}</span>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
