const path = require("path");
const merge = require("deepmerge");
const vyperConfig = require("../../../../configurations/devtools.conf");
exports.config = merge(vyperConfig.config, {
  connectionTimeout: 5000,
  waitforTimeout: 300000,
  bail: 1,

  specs: [
    path.resolve(__dirname, "network.test.js"),
    path.resolve(__dirname, "pageInitialLoad.test.js"),
    path.resolve(__dirname, "pupetteer.test.js")
  ],

  maxInstances: 5,

  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",
});
