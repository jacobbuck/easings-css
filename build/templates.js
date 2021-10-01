// Converts a string from camelCase to kebab-case.
const kebabCase = (string) =>
  string.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

const css = (easings) =>
  ':root {' +
  Object.entries(easings)
    .flatMap(([name, value]) => [
      `--${name}: ${value};`,
      `--${kebabCase(name)}: ${value};`,
    ])
    .join('') +
  '}';

const js = (easings) =>
  Object.entries(easings)
    .map(([name, value]) => `export const ${name} = '${value}';`)
    .join('');

const less = (easings) =>
  Object.entries(easings)
    .flatMap(([name, value]) => [
      `@${name}: ${value};`,
      `@${kebabCase(name)}: ${value};`,
    ])
    .join('');

const scss = (easings) =>
  Object.entries(easings)
    .flatMap(([name, value]) => [
      `$${name}: ${value};`,
      `$${kebabCase(name)}: ${value};`,
    ])
    .join('');

module.exports = { css, js, less, scss };
