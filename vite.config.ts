import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const copyPublicAssets = () => ({
  name: 'copy-public-assets',
  apply: 'build',
  generateBundle() {
    const rootDir = process.cwd()
    const publicDir = path.join(rootDir, 'public')
    const outDir = path.join(rootDir, 'dist')
    const entries = ['unity-game', 'favicon', 'favicon-32x32.png', 'vite.svg']

    for (const entry of entries) {
      const source = path.join(publicDir, entry)
      if (!fs.existsSync(source)) continue

      const destination = path.join(outDir, entry)
      fs.cpSync(source, destination, { recursive: true, force: true })
    }
  },
})

export default defineConfig({
  plugins: [react(), copyPublicAssets()],
  assetsInclude: ['**/*.br'],
  publicDir: false,
})
