import { defineConfig } from 'vitest/config'

export default defineConfig({
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
  },
})
