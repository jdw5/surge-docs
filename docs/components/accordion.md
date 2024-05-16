---
outline: deep
---
# Accordion

The accordion component is used to display a list of items which can be expanded or collapsed. This should usually be restricted to public facing or FAQs sections of your site. 

## Import
```javascript
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@/Components/Accordion'
```

## Anatomy
```javascript
<Accordion class="max-w-sm w-full">
    <AccordionItem value="1">
        <AccordionHeader>
            First item
        </AccordionHeader>
        <AccordionContent>
            First second
        </AccordionContent>
    </AccordionItem>
</Accordion>
```

## Component API
The component is built using `Radix Vue` primitives.

### Accordion

<!-- Make a table with the headers prop, default, usage, type -->
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `type` | `'single'` | High | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |
| `orientation` | `'vertical'` | Low | `'vertical'\|'horizontal'`<br>The orientation of the accordion |
| `collapsible` | `false` | High | `boolean'`<br>If true and when type `single`, clicking the header will collapse the accordion |
| `defaultValue` | `-` | Mid | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |
| `disabled` | `false` | Low | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |
| `dir` | `'rtl'` | Low | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |
| `asChild` | `true` | Low | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |
| `as` | `'div'` | Low | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |

| Model | Usage | Type |
| ---- | ---- | ---- |
| `modelValue` | High | `string\|string[]`<br>Control the value of the active items programmatically |

### AccordionItem
| Prop | Default | Usage | Type |
| ---- | ---- | ---- | ---- |
| `type` | `'single'` | High | `'single'\|'multiple'`<br>Control whether one or multiple items can be expanded at one time |


### AccordionHeader

### AccordionContent

## Examples
### Default Open
```javascript
<Accordion defaultOpen="2">
    <AccordionItem value="1">
        <AccordionHeader>
            Banana
        </AccordionHeader>
        <AccordionContent>
            Bananas are yellow
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
        <AccordionHeader>
            Apple
        </AccordionHeader>
        <AccordionContent>
            Apples are red
        </AccordionContent>
    </AccordionItem>
</Accordion>
```
### Controlling Open State
```javascript
/** Infers whether single or multiple from `open` */
const open = ref(['1', '3'])

<Accordion v-model="open">
    <AccordionItem value="1">
        <AccordionHeader>
            Banana
        </AccordionHeader>
        <AccordionContent>
            Bananas are yellow
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
        <AccordionHeader>
            Apple
        </AccordionHeader>
        <AccordionContent>
            Apples are red
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
        <AccordionHeader>
            Orange
        </AccordionHeader>
        <AccordionContent>
            Oranges are orange
        </AccordionContent>
    </AccordionItem>
</Accordion>
```