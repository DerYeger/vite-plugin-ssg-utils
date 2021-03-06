import type { Options } from 'vite-plugin-ssg-utils'
import SSGUtils from 'vite-plugin-ssg-utils'
import { describe, expect, it } from 'vitest'

describe('The plugin', () => {
  it('installs a dummy ResizeObserver', () => {
    expect(global.ResizeObserver).toBeUndefined()
    const options: Options = { resizeObserver: true }
    // @ts-expect-error We don't need a valid PluginContext to test this plugin
    SSGUtils(options).buildStart?.()
    expect(ResizeObserver).toBeDefined()
  })
})
