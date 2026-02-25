"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

const languages = [
  { value: "ko", label: "한국어", flag: "🇰🇷" },
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "ja", label: "日本語", flag: "🇯🇵" },
] as const

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const currentLanguage = languages.find((lang) => lang.value === locale)

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[160px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue>
          {currentLanguage?.flag} {currentLanguage?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
