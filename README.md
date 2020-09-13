# easings-css

Provides [easing functions](http://easings.net/) for CSS.

Available as CSS Custom Properties, JSON object, and JavaScript, Less and Sass variables.

## Usage

### CSS

```css
@import 'easings-css';
```

> :warning: If you're not using [postcss-import](https://github.com/postcss/postcss-import) or similar to automatically resolve `node_modules`, you'll need to manually resolve to the path: `node_modules/easings-css/index.css`.

```css
.example {
  transition-timing: var(--ease-out-quad);
}
```

### LESS

```less
@import 'easings-css';
```

```less
.example {
  transition-timing: @ease-out-quad;
}
```

### SASS

```scss
@import 'easings-css';
```

> :warning: If you don't have `node_modules` automatically resolved, you'll need to manually resolve to the path: `node_modules/easings-css`.

```scss
.example {
  transition-timing: $ease-out-quad;
}
```

### JavaScript

```js
const easings = require('easings-css');
```

```js
const Example = styled.div`
  transition-timing: ${easings.easeOutQuad};
`;
```

### JavaScript Module

```js
import * as easings from 'easings-css';
```

```js
const Example = styled.div`
  transition-timing: ${easeOutQuad};
`;
```

You can also import individual easings for better tree-shaking:

```js
import { easeOutQuad } from 'easings-css';
```

## Easings

### easeInSine

[`cubic-bezier(0.47, 0, 0.745, 0.715)`](https://cubic-bezier.com/#0.47,0,0.745,0.715)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInSine)` or<br />`var(--ease-in-sine)` | `@easeInSine` or<br />`@ease-in-sine` | `$easeInSine` or<br />`$ease-in-sine` | `easeInSine` |

### easeOutSine

[`cubic-bezier(0.39, 0.575, 0.565, 1)`](https://cubic-bezier.com/#0.39,0.575,0.565,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutSine)` or<br />`var(--ease-out-sine)` | `@easeOutSine` or<br />`@ease-out-sine` | `$easeOutSine` or<br />`$ease-out-sine` | `easeOutSine` |

### easeInOutSine

[`cubic-bezier(0.445, 0.05, 0.55, 0.95)`](https://cubic-bezier.com/#0.445,0.05,0.55,0.95)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutSine)` or<br />`var(--ease-in-out-sine)` | `@easeInOutSine` or<br />`@ease-in-out-sine` | `$easeInOutSine` or<br />`$ease-in-out-sine` | `easeInOutSine` |

### easeInQuad

[`cubic-bezier(0.55, 0.085, 0.68, 0.53)`](https://cubic-bezier.com/#0.55,0.085,0.68,0.53)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInQuad)` or<br />`var(--ease-in-quad)` | `@easeInQuad` or<br />`@ease-in-quad` | `$easeInQuad` or<br />`$ease-in-quad` | `easeInQuad` |

### easeOutQuad

[`cubic-bezier(0.25, 0.46, 0.45, 0.94)`](https://cubic-bezier.com/#0.25,0.46,0.45,0.94)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutQuad)` or<br />`var(--ease-out-quad)` | `@easeOutQuad` or<br />`@ease-out-quad` | `$easeOutQuad` or<br />`$ease-out-quad` | `easeOutQuad` |

### easeInOutQuad

[`cubic-bezier(0.455, 0.03, 0.515, 0.955)`](https://cubic-bezier.com/#0.455,0.03,0.515,0.955)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutQuad)` or<br />`var(--ease-in-out-quad)` | `@easeInOutQuad` or<br />`@ease-in-out-quad` | `$easeInOutQuad` or<br />`$ease-in-out-quad` | `easeInOutQuad` |
   
### easeInCubic

[`cubic-bezier(0.55, 0.055, 0.675, 0.19)`](https://cubic-bezier.com/#0.55,0.055,0.675,0.19)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInCubic)` or<br />`var(--ease-in-cubic)` | `@easeInCubic` or<br />`@ease-in-cubic` | `$easeInCubic` or<br />`$ease-in-cubic` | `easeInCubic` |

### easeOutCubic

[`cubic-bezier(0.215, 0.61, 0.355, 1)`](https://cubic-bezier.com/#0.215,0.61,0.355,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutCubic)` or<br />`var(--ease-out-cubic)` | `@easeOutCubic` or<br />`@ease-out-cubic` | `$easeOutCubic` or<br />`$ease-out-cubic` | `easeOutCubic` |

### easeInOutCubic

[`cubic-bezier(0.645, 0.045, 0.355, 1)`](https://cubic-bezier.com/#0.645,0.045,0.355,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutCubic)` or<br />`var(--ease-in-out-cubic)` | `@easeInOutCubic` or<br />`@ease-in-out-cubic` | `$easeInOutCubic` or<br />`$ease-in-out-cubic` | `easeInOutCubic` |
 
### easeInQuart

[`cubic-bezier(0.895, 0.03, 0.685, 0.22)`](https://cubic-bezier.com/#0.895,0.03,0.685,0.22)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInQuart)` or<br />`var(--ease-in-quart)` | `@easeInQuart` or<br />`@ease-in-quart` | `$easeInQuart` or<br />`$ease-in-quart` | `easeInQuart` |

### easeOutQuart

[`cubic-bezier(0.165, 0.84, 0.44, 1)`](https://cubic-bezier.com/#0.165,0.84,0.44,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutQuart)` or<br />`var(--ease-out-quart)` | `@easeOutQuart` or<br />`@ease-out-quart` | `$easeOutQuart` or<br />`$ease-out-quart` | `easeOutQuart` |

### easeInOutQuart

[`cubic-bezier(0.77, 0, 0.175, 1)`](https://cubic-bezier.com/#0.77,0,0.175,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutQuart)` or<br />`var(--ease-in-out-quart)` | `@easeInOutQuart` or<br />`@ease-in-out-quart` | `$easeInOutQuart` or<br />`$ease-in-out-quart` | `easeInOutQuart` |
 
### easeInQuint

[`cubic-bezier(0.755, 0.05, 0.855, 0.06)`](https://cubic-bezier.com/#0.755,0.05,0.855,0.06)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInQuint)` or<br />`var(--ease-in-quint)` | `@easeInQuint` or<br />`@ease-in-quint` | `$easeInQuint` or<br />`$ease-in-quint` | `easeInQuint` |

### easeOutQuint

[`cubic-bezier(0.23, 1, 0.32, 1)`](https://cubic-bezier.com/#0.23,1,0.32,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutQuint)` or<br />`var(--ease-out-quint)` | `@easeOutQuint` or<br />`@ease-out-quint` | `$easeOutQuint` or<br />`$ease-out-quint` | `easeOutQuint` |

### easeInOutQuint

[`cubic-bezier(0.86, 0, 0.07, 1)`](https://cubic-bezier.com/#0.86,0,0.07,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutQuint)` or<br />`var(--ease-in-out-quint)` | `@easeInOutQuint` or<br />`@ease-in-out-quint` | `$easeInOutQuint` or<br />`$ease-in-out-quint` | `easeInOutQuint` |

### easeInExpo

[`cubic-bezier(0.95, 0.05, 0.795, 0.035)`](https://cubic-bezier.com/#0.95,0.05,0.795,0.035)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInExpo)` or<br />`var(--ease-in-expo)` | `@easeInExpo` or<br />`@ease-in-expo` | `$easeInExpo` or<br />`$ease-in-expo` | `easeInExpo` |

### easeOutExpo

[`cubic-bezier(0.19, 1, 0.22, 1)`](https://cubic-bezier.com/#0.19,1,0.22,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutExpo)` or<br />`var(--ease-out-expo)` | `@easeOutExpo` or<br />`@ease-out-expo` | `$easeOutExpo` or<br />`$ease-out-expo` | `easeOutExpo` |

### easeInOutExpo

[`cubic-bezier(1, 0, 0, 1)`](https://cubic-bezier.com/#1,0,0,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutExpo)` or<br />`var(--ease-in-out-expo)` | `@easeInOutExpo` or<br />`@ease-in-out-expo` | `$easeInOutExpo` or<br />`$ease-in-out-expo` | `easeInOutExpo` |

### easeInCirc

[`cubic-bezier(0.6, 0.04, 0.98, 0.335)`](https://cubic-bezier.com/#0.6,0.04,0.98,0.335)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInCirc)` or<br />`var(--ease-in-circ)` | `@easeInCirc` or<br />`@ease-in-circ` | `$easeInCirc` or<br />`$ease-in-circ` | `easeInCirc` |

### easeOutCirc

[`cubic-bezier(0.075, 0.82, 0.165, 1)`](https://cubic-bezier.com/#0.075,0.82,0.165,1)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutCirc)` or<br />`var(--ease-out-circ)` | `@easeOutCirc` or<br />`@ease-out-circ` | `$easeOutCirc` or<br />`$ease-out-circ` | `easeOutCirc` |

### easeInOutCirc

[`cubic-bezier(0.785, 0.135, 0.15, 0.86)`](https://cubic-bezier.com/#0.785,0.135,0.15,0.86)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutCirc)` or<br />`var(--ease-in-out-circ)` | `@easeInOutCirc` or<br />`@ease-in-out-circ` | `$easeInOutCirc` or<br />`$ease-in-out-circ` | `easeInOutCirc` |
   
### easeInBack

[`cubic-bezier(0.6, -0.28, 0.735, 0.045)`](https://cubic-bezier.com/#0.6,-0.28,0.735,0.045)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInBack)` or<br />`var(--ease-in-back)` | `@easeInBack` or<br />`@ease-in-back` | `$easeInBack` or<br />`$ease-in-back` | `easeInBack` |

### easeOutBack

[`cubic-bezier(0.175, 0.885, 0.32, 1.275)`](https://cubic-bezier.com/#0.175,0.885,0.32,1.275)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeOutBack)` or<br />`var(--ease-out-back)` | `@easeOutBack` or<br />`@ease-out-back` | `$easeOutBack` or<br />`$ease-out-back` | `easeOutBack` |

### easeInOutBack

[`cubic-bezier(0.68, -0.55, 0.265, 1.55)`](https://cubic-bezier.com/#0.68,-0.55,0.265,1.55)

| CSS | LESS | SASS | JS |
| --- | ---- | ---- | -- |
| `var(--easeInOutBack)` or<br />`var(--ease-in-out-back)` | `@easeInOutBack` or<br />`@ease-in-out-back` | `$easeInOutBack` or<br />`$ease-in-out-back` | `easeInOutBack` |
