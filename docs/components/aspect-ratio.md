---
outline: deep
---
# Aspect Ratio
The `AspectRatio` component maintains a fixed aspect ratio for children, specified by the `ratio` prop.

## Import
```javascript
import { AspectRatio } from '@/Components/AspectRatio'
```

## Anatomy
The anatomy of it is:
```javascript
<AspectRatio :aspectRatio="16/9">
    <img src="https://source.unsplash.com/random/800x600" alt="" />
</AspectRatio>
```

**Note:** Do not bind classes directly to the `AspectRatio` component. Instead, wrap it in a `div` and bind classes to the `div`, especially for sizing widths/heights.

## Component API
### AspectRatio
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `ratio` | `false` | High | `number`<br>The ratio to use  |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |