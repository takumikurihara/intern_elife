const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname, "functions/dist"),
  // devServer: {
  //   proxy: 'http://127.0.0.1:5000/'
  // }
};
