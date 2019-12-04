const errorConstants = require("./error-constants");
const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

const addons = (/* string | string[] */ addonsArg) => {
  let addons = [...[addonsArg]].filter(Boolean);
  return addons.map(addonName => require(`./addons/webpack.${addonName}.js`));
};

module.exports = env => {
  console.log(env);
  if (!env) {
    throw new Error(errorConstants.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./webpack.${env.env}.js`);
  const mergedConfig = webpackMerge.smart(commonConfig, envConfig, ...addons(env.addons));
  return mergedConfig;
};
