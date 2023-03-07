module.exports = {
  '**/*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit'],
  '**/*.{js,jsx,cjs,ts,tsx}': ['eslint . --cache --fix', 'prettier --write'],
  '**/*.css': ['stylelint --fix'],
  '**/*.html': [() => 'npx htmlhint "**/*.html"'],
}
