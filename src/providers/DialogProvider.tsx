"use client"

import React, { createContext, ReactNode, useRef, useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// ===== 타입 정의 =====
type AlertOptions = string | { title?: string; content: string; closeBtn?: string; sizeClassName?: string }

type ConfirmOptions =
  | string
  | { title?: string; content: string; yesBtn?: string; noBtn?: string; sizeClassName?: string }

type ShowComponentOptions = {
  title?: string
  component: ReactNode
  sizeClassName?: string
  onClose?: () => void
}

type ShowOptions = ReactNode | ShowComponentOptions

// ===== 기본값 =====
const DEFAULT_ALERT_TITLE = "알림"
const DEFAULT_ALERT_CLOSE_BTN = "닫기"

const DEFAULT_CONFIRM_TITLE = "확인"
const DEFAULT_CONFIRM_YES_BTN = "예"
const DEFAULT_CONFIRM_NO_BTN = "아니오"

// ===== Context 인터페이스 =====
interface DialogContextValue {
  alert: (options: AlertOptions) => Promise<void>
  confirm: (options: ConfirmOptions) => Promise<boolean>
  show: (options: ShowOptions) => Promise<any>
  close: (result?: any) => void
}

export const DialogContext = createContext<DialogContextValue | null>(null)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState<ReactNode>(null)
  const [dialogTitle, setDialogTitle] = useState<string | undefined>(undefined)
  const [dialogMode, setDialogMode] = useState<"alert" | "confirm" | "show">("show")

  const [alertCloseBtn, setAlertCloseBtn] = useState<string>(DEFAULT_ALERT_CLOSE_BTN)

  const [confirmYesBtn, setConfirmYesBtn] = useState<string>(DEFAULT_CONFIRM_YES_BTN)
  const [confirmNoBtn, setConfirmNoBtn] = useState<string>(DEFAULT_CONFIRM_NO_BTN)

  const [showSizeClassName, setShowSizeClassName] = useState<string>("")

  // resolveRef는 useRef로 MutableRefObject를 얻는다. current에 값 할당 가능.
  const resolveRef = useRef<((value: any) => void) | null>(null)

  const close = (result?: any) => {
    setOpen(false)
    // onClose 콜백이 있다면 실행
    if (closeHandler.current) {
      closeHandler.current()
      closeHandler.current = undefined // 실행 후 초기화
    }
    if (resolveRef.current) {
      const callback = resolveRef.current
      resolveRef.current = null
      callback(result)
    }
  }

  const alert = (options: AlertOptions) => {
    return new Promise<void>((resolve) => {
      resolveRef.current = resolve
      setDialogMode("alert")
      if (typeof options === "string") {
        setDialogTitle(DEFAULT_ALERT_TITLE)
        setDialogContent(<p>{options}</p>)
        setAlertCloseBtn(DEFAULT_ALERT_CLOSE_BTN)
        setShowSizeClassName("")
      } else {
        setDialogTitle(options.title ?? DEFAULT_ALERT_TITLE)
        setDialogContent(<p>{options.content}</p>)
        setAlertCloseBtn(options.closeBtn ?? DEFAULT_ALERT_CLOSE_BTN)
        setShowSizeClassName(options.sizeClassName ?? "")
      }
      setOpen(true)
    })
  }

  const confirm = (options: ConfirmOptions) => {
    return new Promise<boolean>((resolve) => {
      resolveRef.current = resolve
      setDialogMode("confirm")
      if (typeof options === "string") {
        setDialogTitle(DEFAULT_CONFIRM_TITLE)
        setDialogContent(<p>{options}</p>)
        setConfirmYesBtn(DEFAULT_CONFIRM_YES_BTN)
        setConfirmNoBtn(DEFAULT_CONFIRM_NO_BTN)
        setShowSizeClassName("")
      } else {
        setDialogTitle(options.title ?? DEFAULT_CONFIRM_TITLE)
        setDialogContent(<p>{options.content}</p>)
        setConfirmYesBtn(options.yesBtn ?? DEFAULT_CONFIRM_YES_BTN)
        setConfirmNoBtn(options.noBtn ?? DEFAULT_CONFIRM_NO_BTN)
        setShowSizeClassName(options.sizeClassName ?? "")
      }
      setOpen(true)
    })
  }

  const closeHandler = useRef<(() => void) | undefined>(undefined)

  const show = (options: ShowOptions) => {
    return new Promise<any>((resolve) => {
      resolveRef.current = resolve
      setDialogMode("show")

      if (!options) {
        setDialogTitle(undefined)
        setDialogContent(null)
        setShowSizeClassName("")
        closeHandler.current = undefined // reset closeHandler
        setOpen(true)
        return
      }

      if (React.isValidElement(options)) {
        setDialogTitle(undefined)
        setDialogContent(options)
        setShowSizeClassName("")
        closeHandler.current = undefined // reset closeHandler
      } else {
        const opts = options as ShowComponentOptions
        setDialogTitle(opts.title)
        setDialogContent(opts.component)
        setShowSizeClassName(opts.sizeClassName ?? "")
        closeHandler.current = opts.onClose // onClose 콜백 저장
      }

      setOpen(true)
    })
  }

  return (
    <Dialog open={open} onOpenChange={(val: boolean) => !val && close()}>
      <DialogContext.Provider value={{ alert, confirm, show, close }}>
        {children}
        <DialogContent className={`[&>button]:hidden ${showSizeClassName} overflow-y-auto thin-scrollbar z-110`}>
          <DialogHeader className="flex flex-row items-center justify-between">
            {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
            <DialogClose asChild>
              <Button variant="ghost" className="absolute right-2 top-2 cursor-pointer hover:bg-transparent">
                <X className="size-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          {dialogContent}
          {dialogMode === "alert" && (
            <DialogFooter>
              <Button onClick={() => close()}>{alertCloseBtn}</Button>
            </DialogFooter>
          )}
          {dialogMode === "confirm" && (
            <DialogFooter className="flex-row justify-end">
              <Button variant="outline" onClick={() => close(false)}>
                {confirmNoBtn}
              </Button>
              <Button onClick={() => close(true)}>{confirmYesBtn}</Button>
            </DialogFooter>
          )}
        </DialogContent>
      </DialogContext.Provider>
    </Dialog>
  )
}
