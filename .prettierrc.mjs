import prettierPluginSortImports from '@trivago/prettier-plugin-sort-imports';

export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  plugins: [prettierPluginSortImports],
  importOrder: ['^@nestjs/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true
};