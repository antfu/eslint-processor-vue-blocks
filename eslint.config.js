// @ts-check
import antfu from '@antfu/eslint-config'
import processorVueBlocks from 'eslint-processor-vue-blocks'
import pluginVue from 'eslint-plugin-vue'
import { mergeProcessors } from 'eslint-merge-processors'

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
