> 💡 **CSS Selectors: `html {}` vs `html, body {}`**
>
> **`html { ... }`**
> - Targets only the `<html>` element (the root of your document).
> - Useful for setting global properties like `font-size` or `background` that you want to apply to the entire page.
> - Some properties (like `font-size`) cascade to child elements, but others (like `background`) only affect the `<html>` element itself.
>
> **`html, body { ... }`**
> - Targets both the `<html>` and `<body>` elements.
> - Commonly used for resetting default browser styles (like margin and padding) that are often applied to `<body>`.
> - Ensures both elements receive the same styles, which helps maintain consistency across browsers.
>
> **Why use both?**
> - Browsers may apply default styles to `<body>`, so resetting both ensures a consistent look.
> - Use `html { ... }` for root-level/global settings, and `html, body { ... }` for resets or styles that must apply to both elements.