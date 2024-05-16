---
outline: deep
---
# Alert
A badge component that can be used to display minor information.

## Import
```javascript
import { Badge } from '@/Components/'
```

## Anatomy
The anatomy of it is:
```javascript
<Badge variant="outline">
    Tag
</Badge>
```

## Component API
### Alert
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |
| `variant` | `'default'` | High | `'primary'\|'secondary'\|'default'\|'outline'`<br>The variant of the badge |
