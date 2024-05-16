---
outline: deep
---
# Vanguard
The table component restructured for specific use with `Vanguard`.

## Import
```javascript
import { Vanguard } from '@/Components/'
```

## Anatomy
The anatomy of it is:

```javascript
<Vanguard :table />
```

## Component API
### Alert
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

| Model | Usage | Type |
| ---- | ---- | ---- |
| `modelValue` | High | `string\|string[]`<br>Control the value of the active items programmatically |