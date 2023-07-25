---
sidebar_position: 2
title: Installation
description: Installation of AkramCSS.
---

## Prerequisites

- [Node.js](https://nodejs.org/)

## Installation

AkramCSS can be used in two different ways: via a Content Delivery Network (CDN) or by installing it with npm. Let's explore each method:

### Using AkramCSS from CDN

You can quickly start using AkramCSS by adding the following line to the `<head>` section of your HTML file:

```bash filename="Terminal"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nouhsa/akramcss@1.0.39/css/akramcss.min.css">
```

### Installing AkramCSS with npm

If you prefer using npm to manage your dependencies, you can install AkramCSS by running the following command in your project directory:

```bash filename="Terminal"
npm install @nouhsa/akramcss
```

#### import css

Import the CSS file in your project's main CSS file (e.g., styles.css) using the `@import` rule:

```bash filename="Terminal"
@import "../node_modules/@nouhsa/akramcss/css/akramcss.min.css";
```

Make sure to adjust the path to the akramcss.min.css file based on your project structure.

That's it! You have successfully installed and imported AkramCSS into your project. You can now start using the utility classes to simplify your CSS development process and create stunning web experiences with ease.
