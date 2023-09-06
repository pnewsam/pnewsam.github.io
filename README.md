# paultnewsam.com

This is my personal website, built with [Vite](https://vitejs.dev/), [LitElement](https://lit.dev/), and [Tailwind](https://tailwindcss.com/).

## Development

In order to make changes, clone the repository, then navigate to the cloned directory and install the dependencies.

```
git clone https://github.com/pnewsam/paultnewsam.com.git

cd ./paultnewsam.com

npm install
```

Then run the development server.

```
npm run dev
```

The development server will be available at `localhost:5173`

## Development Guidelines

### Components

Any components shared across multiple pages will be created as custom elements using LitElement. (It is necessary to extend TailwindElement rather than LitElement if tailwind classes are being used).

```
export class TopNav extends TailwindElement { ... }
// vs.
export class TopNav extends LitElement { ... }
```

### Adding Pages

Any new pages must be added as html files (either nested in new directories `/bookshelf/index.html` or as top-level html files `/bookshelf.html`). The location for the new page must then be added to the vite.config.js under rollupOptions:

```
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.html",
        myNewPath: "./src/myNewPath/index.html"
      },
    },
  },
```

## Deployment

In order to deploy changes, a build must be run, and then the changes (including the built pages that get output into the `docs` directory) must be merged to the `main` branch on Github.

```
npm run build
git add -A
git commit -m "My commit"
git push origin HEAD
# And then merge a PR on Github
```

## References

- https://blog.bitsrc.io/how-to-develop-a-web-component-using-tailwind-a-modern-starter-kit-vite-tailwind-lit-element-4db824b50b23
