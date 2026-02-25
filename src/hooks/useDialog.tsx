"use client"

import { useContext } from "react"
import { DialogContext } from "@/providers/DialogProvider"

export const useDialog = () => {
  const ctx = useContext(DialogContext)
  if (!ctx) {
    throw new Error("useDialog must be used within a DialogProvider")
  }
  return ctx
}
