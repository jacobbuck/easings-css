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

```less
@import 'easings-css';
```

> :warning: If you're not using [postcss-import](https://github.com/postcss/postcss-import) or similar to automatically resolve `node_modules`, you'll need to manually resolve to the path: `node_modules/easings-css`.

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
