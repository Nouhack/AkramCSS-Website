---
sidebar_position: 2
---

Create stunning and adaptive layouts with AkramCSS's built-in responsive design capabilities. We follow a `mobile-first` approach to ensure your web pages look great on all devices. The framework includes four carefully crafted breakpoints to give you full control over your design's responsiveness:

- small (**sm**).
- medium (**md**).
- large (**lg**).
- extra-large (**xl**).

Whether you're building a mobile app, a tablet-friendly interface, or a desktop website, AkramCSS makes it seamless to customize your content's presentation for different screen sizes. Embrace the power of responsive web design effortlessly with AkramCSS."

| **Breakpoint prefix** | **Minimum width** | **CSS**                    |
| --------------------- | ----------------- | -------------------------- |
|                       | 0px               | @media (min-width: 0px)    |
| md                    | 768px             | @media (min-width: 768px)  |
| lg                    | 992px             | @media (min-width: 992px)  |
| xl                    | 1024px            | @media (min-width: 1024px) |

## usage

With AkramCSS, achieving the perfect style on any screen size has never been easier. Harness the power of our intuitive breakpoint prefixes to effortlessly customize your designs for different devices.

Syntax: { '' | md | lg | xl }: { utility class, e.g., bg-akram | opacity-50 | w-100-100 | ... }

Simply add the desired breakpoint prefix to your utility class, and AkramCSS will automatically apply the styles based on the screen size. Whether you're targeting small handheld devices (md), large tablets (lg), or extra-large desktops (xl), AkramCSS ensures your web pages adapt flawlessly to any viewport.

Take complete control of your responsive design with AkramCSS breakpoint prefixes and deliver a delightful user experience across all devices.

**example : **

```html
<p className="md:bg-sissa lg:bg-akram">I will be the king of the pirates</p>
```

## mobile first

AkramCSS proudly follows a "mobile-first" approach to responsive design. But what exactly does "mobile first" mean? It means that by default, the styles you apply will be targeted towards the smallest screens, such as mobile devices. This way, your design starts with a clean, simple layout that progressively enhances on larger screens.

To style an element for all screen sizes (from 0px and up), simply apply the class without any breakpoint prefix. For example:

```html
<div className="bg-akram"></div>
```

The above code will set the background color to 'akram' for all screens, unless they have a specific breakpoint prefix.

Now, let's explore how breakpoint prefixes work. Consider the following code:

```html
<div className="bg-akram lg:bg-sissa"></div>
```

Here, we have assigned two background colors based on breakpoints. For screens smaller than the "large" breakpoint (lg), the background color will be 'akram'. However, once the screen size reaches the "large" breakpoint or any larger size (lg and up), the background color will switch to 'sissa'.

In summary, AkramCSS makes it easy to implement responsive styles with breakpoint prefixes. By default, the styles are applied to the smallest screens due to the mobile-first approach. Use breakpoint prefixes to selectively modify styles for larger screens, providing a seamless and optimized user experience across a wide range of devices.
