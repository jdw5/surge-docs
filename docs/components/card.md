---
outline: deep
---
# Card
A card component that displays content in a consistent way.

## Import
```javascript
import { Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/Components/Card'
```

## Anatomy
The anatomy of it is:
```javascript
<Card>
    <CardHeader>
        <CardTitle> Title </CardTitle>
    </CardHeader>
    <CardContent>
        <p> Content </p>
    </CardContent>
    <CardFooter>
        Footer
    </CardFooter>
</Card>

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

