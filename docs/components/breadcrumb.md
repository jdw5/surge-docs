---
outline: deep
---
# Breadcrumb

A breadcrumb component which displays a list of links to help users navigate through a website.

## Import
```javascript
import { Breadcrumb } from '@/Components/Breadcrumb'
```


## Anatomy
The anatomy of it is:
```javascript
<Breadcrumb :links>

```

## Component API
The breascrumb component will automatically render your given breadcrumbs list when passed as a prop. The additional components are considered internal only.

### Breadcrumb
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `links*` | `[]` | High | `Breadcrumb[]`<br>The links to display. |
| `dropsdown` | `true` | Low | `boolean`<br>Whether to display all links in-line or use a dropdown if there are too many |

### BreadcrumbHome
Does not accept props.

### BreadcrumbItem
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `link*` | `-` | High | `Breadcrumb`<br>The breadcrumb to render |

### BreadcrumbMore
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `links*` | `-` | High | `Breadcrumb[]`<br>Array of the overflow links |

### BreadcrumbSeparator
Does not accept props.