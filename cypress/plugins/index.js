const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const {NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

module.exports = async (on, config) => {
  //Upload variables environement (dev.json or recette.json or preprod.json)
  const tags=config.env.tags
  config.env = require(
    "./../support/environements/" + config.env.ENV + ".json"
  );
  config.env.tags=tags
  console.log(config.env)

  //Set cucumber preprocessor
  await addCucumberPreprocessorPlugin(on, config);

  //Utilisez la configuration Esbuild pour le préprocesseur
  on(
    "file:preprocessor",
    createBundler({
      plugins: [NodeModulesPolyfillPlugin(),createEsbuildPlugin(config, {})],
    })
  );
  return config;
};
