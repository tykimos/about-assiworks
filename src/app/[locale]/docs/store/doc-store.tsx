import { create } from "zustand"

interface DocStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useDocStore = create<DocStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))
