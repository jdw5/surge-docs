---
outline: deep
---
# DarkMode
A dark mode component that allows users to toggle between light and dark mode.

## Import
```javascript
import { DarkMode } from '@/Components/DarkMode'
```

## Anatomy
The anatomy of it is:
```javascript
<DarkMode v-slot={ isDark } :as="IconButton">
    <Sun v-if="isDark"/>
    <Moon v-else />
</DarkMode>
```

## Component API
### DarkMode
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'button'` | Low | `Component`<br>The HTML or Vue component to display as. |