// @ts-check
import antfu from '@antfu/eslint-config'
import { mergeProcessors } from 'eslint-merge-processors'
import pluginVue from 'eslint-plugin-vue'
import processorVueBlocks from 'eslint-processor-vue-blocks'

export default antfu(
  {
    vue: true,
    formatters: {
      css: true,
    },
  },
  {
    files: ['**/*.vue'],
    processor: mergeProcessors([
      pluginVue.processors['.vue'],
      processorVueBlocks({
        blocks: {
          styles: true,
        },
      }),
    ]),
  },
)
