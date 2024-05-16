---
outline: deep
---
# Avatar
A simple avatar component that displays an image or initials as a fallback value.

## Import
```javascript
import { Avatar, AvatarImage, AvatarFallback } from '@/Components/Avatar'
```

## Anatomy
The anatomy of it is:
```javascript
<Avatar>
    <AvatarImage src="https://example.com/image.jpg" />
    <AvatarFallback> AB </AvatarFallback>
</Avatar>
```

## Component API
### Avatar
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

### AvatarImage
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `src` | `-` | High | `string`<br>The URL of the image to display. |
| `shape` | `'circle'` | Low | `'circle'\|'square'`<br>Predefined classes for whether the avatar should be circular or use default theme rounding |
| `size` | `'base'` | Low | `'sm'\|'base'\|'lg'`<br>Predefined classes for the size that the avatar should be - feel free to extend. |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

### AvatarFallback
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `delayMs` | `400` | Low | `number`<br>The delay in milliseconds before the fallback is shown. |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

