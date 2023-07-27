---
sidebar_position: 1
---

# Layout

## Aspect ratio

Enhance your web layout with the aspect-ratio CSS property! By defining a preferred aspect ratio for your box, this powerful feature facilitates seamless auto-sizing and layout functions. Unlock new possibilities for responsive design and achieve optimal visual balance effortlessly.

| `Classes    ` | `Properties         ` |
| ------------- | --------------------- |
| aspect-auto   | aspect-ratio : auto   |
| aspect-auto   | aspect-ratio : 1      |
| aspect-auto   | aspect-ratio : 16/9   |
| aspect-0      | aspect-ratio : 1/2    |

**Usage :**

To leverage the Aspect Ratio utility classes, adhere to the following pattern:

{ aspect }-{ auto | square | 16 | 0 }

Example:

```jsx
<div class="bg-akram w-100-100">
  <img class="aspect-auto" />
  <img class="aspect-square" />
  <img class="aspect-16" />
  <img class="aspect-0" />
</div>
```

By employing these classes, you can easily control the aspect ratio of elements within the container, achieving responsive and visually appealing designs.
