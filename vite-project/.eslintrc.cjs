module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Node.js 환경 설정 추가
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 여기에 사용자 정의 규칙을 추가할 수 있습니다.
  },
};
