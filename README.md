# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Saudex Global

  Saudex Global is a React and TypeScript logistics website built with Vite. It presents the company's freight forwarding, import and export, customs, warehousing, distribution, and supply chain services.

  ## Development

  ```bash
  npm install
  npm run dev
  ```

  Create a production build and prerender the public routes with:

  ```bash
  npm run build
  ```

  The generated static site is written to `dist/`. `npm run deploy` publishes that directory to GitHub Pages.
        tsconfigRootDir: import.meta.dirname,
