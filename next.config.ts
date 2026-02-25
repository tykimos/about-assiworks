import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "**/icons/**/*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    recmaPlugins: [],
  },
})

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

export default withNextIntl(withMDX(nextConfig))
