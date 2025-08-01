import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  {
    rules: {
      'no-console': 'warn',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: true,
          ignores: [],
        },
      ],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': [
        'error',
        'camelCase',
        {
          ignores: [],
        },
      ],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: false,
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-props-destructuring': [
        'error',
        {
          destructure: 'never',
        },
      ],
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
      'vue/html-button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['vue'],
          shouldMatchCase: true,
        },
      ],
      'vue/match-component-import-name': 'error',
      'vue/max-lines-per-block': [
        'warn',
        {
          template: 200,
          script: 300,
          style: 200,
          skipBlankLines: true,
        },
      ],
      'vue/max-props': ['warn', { maxProps: 5 }],
      'vue/max-template-depth': ['warn', { maxDepth: 5 }],
      'vue/new-line-between-multi-line-property': [
        'error',
        {
          minLineOfMultilineProperty: 2,
        },
      ],
      'vue/next-tick-style': ['error', 'promise'],
      'vue/no-empty-component-block': 'error',
      'vue/no-import-compiler-macros': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-root-v-if': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-boolean-default': ['error', 'default-false'],
      'vue/no-undef-components': [
        'error',
        {
          ignorePatterns: [],
        },
      ],
      'vue/no-unused-properties': 'warn',
      'vue/no-unused-refs': 'warn',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-define-options': 'error',
      'vue/require-typed-object-prop': 'error',
      'vue/require-typed-ref': 'error',
      'vue/slot-name-casing': ['error', 'camelCase'],
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/v-on-handler-style': [
        'error',
        ['method', 'inline'],
        {
          ignoreIncludesComment: false,
        },
      ],
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
  },

  skipFormatting,
)
