const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
/* eslint-disable flowtype/require-valid-file-annotation,no-param-reassign */
// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Workaround for the following issue
  // https://github.com/webpack-contrib/css-loader/issues/29
  if (configType === "PRODUCTION" && process.env.PUBLIC_PATH) {
    storybookBaseConfig.output.publicPath = process.env.PUBLIC_PATH;
  } else if (configType === "DEVELOPMENT") {
    storybookBaseConfig.output.publicPath = "http://localhost:9009/";
  }

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.(svg|ico|jpg|png)$/,
    loader: "file-loader",
    query: {
      name: "static/media/[name].[hash:8].[ext]"
    }
  });

  storybookBaseConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "ts-loader"
  });
  storybookBaseConfig.resolve.extensions.push(".ts", ".tsx");

  // Return the altered config
  return storybookBaseConfig;
};
