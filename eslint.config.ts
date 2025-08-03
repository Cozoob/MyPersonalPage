import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const ruleLevel = 'warn'
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
        ruleLevel,
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-api-style': [ruleLevel, ['script-setup']],
      'vue/component-name-in-template-casing': [
        ruleLevel,
        'PascalCase',
        {
          registeredComponentsOnly: true,
          ignores: [],
        },
      ],
      'vue/component-options-name-casing': [ruleLevel, 'PascalCase'],
      'vue/custom-event-name-casing': [
        ruleLevel,
        'camelCase',
        {
          ignores: [],
        },
      ],
      'vue/define-emits-declaration': [ruleLevel, 'type-based'],
      'vue/define-macros-order': [
        ruleLevel,
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: false,
        },
      ],
      'vue/define-props-declaration': [ruleLevel, 'type-based'],
      'vue/define-props-destructuring': [
        ruleLevel,
        {
          destructure: 'never',
        },
      ],
      'vue/enforce-style-attribute': [ruleLevel, { allow: ['module'] }],
      'vue/html-button-has-type': [
        ruleLevel,
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'vue/match-component-file-name': [
        ruleLevel,
        {
          extensions: ['vue'],
          shouldMatchCase: true,
        },
      ],
      'vue/match-component-import-name': ruleLevel,
      'vue/max-lines-per-block': [
        ruleLevel,
        {
          template: 200,
          script: 300,
          style: 200,
          skipBlankLines: true,
        },
      ],
      'vue/max-props': [ruleLevel, { maxProps: 5 }],
      'vue/max-template-depth': [ruleLevel, { maxDepth: 5 }],
      'vue/new-line-between-multi-line-property': [
        ruleLevel,
        {
          minLineOfMultilineProperty: 2,
        },
      ],
      'vue/next-tick-style': [ruleLevel, 'promise'],
      'vue/no-empty-component-block': ruleLevel,
      'vue/no-import-compiler-macros': ruleLevel,
      'vue/no-ref-object-reactivity-loss': ruleLevel,
      'vue/no-root-v-if': ruleLevel,
      'vue/no-undef-properties': ruleLevel,
      'vue/no-use-v-else-with-v-for': ruleLevel,
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-boolean-default': [ruleLevel, 'default-false'],
      'vue/no-undef-components': [
        ruleLevel,
        {
          ignorePatterns: [],
        },
      ],
      'vue/no-unused-properties': ruleLevel,
      'vue/no-unused-refs': ruleLevel,
      'vue/prefer-prop-type-boolean-first': ruleLevel,
      'vue/prefer-define-options': ruleLevel,
      'vue/require-typed-object-prop': ruleLevel,
      'vue/require-typed-ref': ruleLevel,
      'vue/slot-name-casing': [ruleLevel, 'camelCase'],
      'vue/v-for-delimiter-style': [ruleLevel, 'in'],
      'vue/v-on-handler-style': [
        ruleLevel,
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
