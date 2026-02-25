"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { ReactNode } from "react"

interface MobileSheetProps {
  children: ReactNode
  side?: "left" | "right" | "top" | "bottom"
  triggerIcon?: ReactNode
  triggerClassName?: string
  sidebarClassName?: string
  title?: string
  hideClose?: boolean
}

export function MobileSheet({
  children,
  side = "left",
  triggerIcon = <Menu className="size-6" />,
  triggerClassName = "p-2",
  sidebarClassName,
  title = "Mobile Sheet",
  hideClose = false,
}: MobileSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={triggerClassName}>
          {triggerIcon}
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className={sidebarClassName} hideClose={hideClose}>
        <VisuallyHidden>
          <SheetTitle>{title}</SheetTitle>
        </VisuallyHidden>
        {children}
      </SheetContent>
    </Sheet>
  )
}
