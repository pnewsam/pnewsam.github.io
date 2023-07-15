export default {
  root: "./src",
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.html",
        blog: "./src/blog/index.html",
      },
    },
    outDir: "../docs",
  },
};
