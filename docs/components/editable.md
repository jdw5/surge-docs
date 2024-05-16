---
outline: deep
---
# Editable
A component to allow previewing and updating pieces of (text) content.

## Import
```javascript
import { Editable, EditableInput, EditablePreview, EditableTrigger, EditableValue, EditableCancel, EditableSave, EditableControls } from '@/Components/Editable'
```

## Anatomy
The anatomy of it is:
```javascript
<Editable v-model="model">
    <EditablePreview>
        <EditableValue />
    </EditablePreview>
    <EditableInput cancelOnBlur />
    <EditableTrigger>
        Edit
    </EditableTrigger>
    <EditableControls>
        <EditableCancel>
            Cancel
        </EditableCancel>
        <EditableSave>
            Save
        </EditableSave>
    </EditableControls>
</Editable>
```

## Component API
### Editable
The root component for editable.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |
| `defaultEdit` | `false` | Low | `boolean`<br>Whether the component should be in edit mode by default. |

| Model | Usage | Type |
| ---- | ---- | ---- |
| `modelValue` | High | `string\|string[]`<br>The text value for the editable element |

### EditableCancel
Convert back to preview mode from editing.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `TextButton` | Low | `Component`<br>The HTML or Vue component to display as. |

### Editable Controls
A wrapper for the cancel and save buttons.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

### EditableInput
The input element which is shown when in edit mode.
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `cancelOnBlur` | `false` | Low | `boolean`<br>Whether losing focus should cancel the changes made. |

### EditablePreview
The wrapper for the value when in preview mode.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'div'` | Low | `Component`<br>The HTML or Vue component to display as. |

### EditableSave
Save the changes made in the input.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `TextButton` | Low | `Component`<br>The HTML or Vue component to display as. |

### EditableTrigger
The element that triggers the edit mode.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `TextButton` | Low | `Component`<br>The HTML or Vue component to display as. |

### EditableValue
The value displayed in the preview mode.

| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `asChild` | `false` | Low | `boolean`<br>Whether the attributes should be instead inherited by the child. |
| `as` | `'span'` | Low | `Component`<br>The HTML or Vue component to display as. |