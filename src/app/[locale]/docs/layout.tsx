import ExpandedDocPage from "./components/mobile/ExpandedDocPage"
import MobileDocHeader from "./components/mobile/MobileDocHeader"
import Sidebar from "./components/Sidebar"
import Toc from "./components/Toc"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <MobileDocHeader />
      <div className="flex max-w-[1400px] mx-auto lg:pr-4 px-2">
        <aside className="sticky top-[73px] hidden lg:block w-68 border-r h-[calc(100vh-73px)] self-start bg-white">
          <Sidebar />
        </aside>
        <main className="flex flex-1">
          {children}
          <Toc />
        </main>
      </div>
      <ExpandedDocPage />
    </>
  )
}
