import { defineConfig } from 'vitest/config'

console.log('inside the config');
export default defineConfig({
  test: {
    deps: {
      interopDefault: false
    }
  },
})
