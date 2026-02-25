"use client"

import { usePathname } from "@/i18n/routing"
import { useEffect, useState } from "react"

type Tables = {
  text: string | null
  id: string
  subTables: {
    text: string | null
    id: string
  }[]
}

export default function Toc() {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const [tables, setTables] = useState<Tables[]>([])

  // DOM에서 TOC 데이터 추출하는 순수 함수
  const extractTablesFromDOM = () => {
    const headings: Tables[] = []
    const h2Elements = document.querySelector("main")?.querySelectorAll("h2")

    if (!h2Elements || h2Elements.length === 0) {
      return []
    }

    const generateId = (text: string) => {
      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\p{L}\p{N}-]+/gu, "")
    }

    const isValidText = (text: string | null): boolean => {
      return text !== null && text.trim() !== "" && text.trim() !== "&nbsp;"
    }

    h2Elements.forEach((h2) => {
      const h2Text = h2.textContent
      if (!isValidText(h2Text)) return

      const h2Id = generateId(h2Text!)
      h2.id = h2Id
      h2.classList.add("scroll-mt-36")

      const h3Elements = []
      let nextSibling = h2.nextElementSibling

      while (nextSibling && nextSibling.tagName !== "H2") {
        if (nextSibling.tagName === "H3") {
          const h3Text = nextSibling.textContent
          if (isValidText(h3Text)) {
            const h3Id = generateId(h3Text!)
            nextSibling.id = h3Id
            nextSibling.classList.add("scroll-mt-36")
            h3Elements.push({ text: h3Text, id: h3Id })
          }
        }
        nextSibling = nextSibling.nextElementSibling
      }

      headings.push({ text: h2Text, id: h2Id, subTables: h3Elements })
    })

    return headings
  }

  // DOM 변경 감지 및 TOC 업데이트
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(decodeURIComponent(window.location.hash))
    }

    const updateTables = () => {
      // requestAnimationFrame으로 비동기 처리
      requestAnimationFrame(() => {
        const newTables = extractTablesFromDOM()
        setTables(newTables)
      })
    }

    const observer = new MutationObserver(() => {
      updateTables()
    })

    const mainElement = document.querySelector("main")

    if (mainElement) {
      observer.observe(mainElement, {
        childList: true,
        subtree: true,
      })
    }

    // 초기 실행
    updateTables()
    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [pathname])

  // 현재 보이는 heading 추적
  useEffect(() => {
    if (tables.length === 0) return

    const headingElements = document.querySelector("main")?.querySelectorAll("h2, h3")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentHash(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: "-10% 0px -80% 0px",
      },
    )

    headingElements?.forEach((headingElement) => {
      observer.observe(headingElement)
    })

    return () => observer.disconnect()
  }, [tables])

  return (
    <div className="xl:flex hidden justify-end sticky top-[100px] h-fit mt-[100px]">
      <nav
        aria-label="목차"
        className="flex justify-start relative w-[230px] border-l border-solid border-gray-200 text-gray-600 text-[15px]"
      >
        <ul>
          {tables.map((table, index) => (
            <li key={index}>
              <a
                href={`#${table.id}`}
                className={`inline-block relative pl-[15px] text-[15px] leading-[24px] my-[5px] ${
                  currentHash === `#${table.id}` ? "text-blue-600" : ""
                } max-w-[230px]`}
              >
                {currentHash === `#${table.id}` && (
                  <div className="absolute top-0 -left-[1.5px] w-[2px] h-full bg-blue-500" />
                )}
                {table.text}
              </a>
              {table.subTables.length > 0 && (
                <ul>
                  {table.subTables.map((subTable, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={`#${subTable.id}`}
                        className={`inline-block relative pl-[25px] text-[15px] leading-[24px] my-[5px] ${
                          currentHash === `#${subTable.id}` ? "text-blue-600" : ""
                        } max-w-[230px]`}
                      >
                        {currentHash === `#${subTable.id}` && (
                          <div className="absolute top-0 -left-[1.5px] w-[2px] h-full bg-blue-500" />
                        )}
                        {subTable.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
