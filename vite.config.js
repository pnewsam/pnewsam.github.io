export default {
  root: "./src",
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.html",
      },
    },
    outDir: "../docs",
  },
};
