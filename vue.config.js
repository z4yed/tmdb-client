const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_reset.scss";
          @import "@/assets/styles/_global.scss";
          @import "@/assets/styles/_breakpoints.scss";
        `,
      },
    },
  },
});
