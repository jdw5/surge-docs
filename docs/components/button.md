---
outline: deep
---
# Button
A complete set of buttons for your application. Can be made into links using the `as` prop.

## Import
```javascript
import { Button, IconButton, TextButton } from '@/Components/'
```

Additionally, two imports are provided to define variants of buttons as components instead of using the `variants` prop.
    
```javascript
import { PrimaryButton, CancelButton } from '@/Components/'
```

## Anatomy
The anatomy of it is:
```javascript
<Button :as="Link" variant="ghost">
    View
</Button>
<Button variant="primary">
    Submit
</Button>
```

## Component API
### Button
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `as` | `'button'` | Low | `Component`<br>The HTML or Vue component to display as. || `type` | `'button'` | Mid | `'button'\|'submit'\|'reset'`<br>Specifies the html button type attribute |
| `variant` | `'primary'` | High | `'primary'\|'secondary'\|'ghost'\|'outline'\|'danger'`<br>The variant of the button |

### IconButton
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `as` | `'button'` | Low | `Component`<br>The HTML or Vue component to display as. || `type` | `'button'` | Mid | `'button'\|'submit'\|'reset'`<br>Specifies the html button type attribute |
| `variant` | `'ghost'` | High | `'primary'\|'secondary'\|'ghost'\|'outline'\|'muted'`<br>The variant of the button |

### TextButton
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'button'` | Low | `Component`<br>The HTML or Vue component to display as. |
| `type` | `'button'` | Mid | `'button'\|'submit'\|'reset'`<br>Specifies the html button type attribute |
| `variant` | `'primary'` | High | `'primary'\|'secondary'\|'default'`<br>The variant of the button |