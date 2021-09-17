var merge = require("deepmerge");
var path = require("path");
var vyperConf = require("../configurations/chrome.conf");
// have main config file as default but overwrite environment specific information
exports.config = merge(vyperConf.config, {
  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",

  suites: {
    testLearn:[path.resolve(__dirname, "./filters1.spec.js")]
  },
  params: {
    auth: {
      formType: "plain"
    }
  },
  specs: [path.resolve(__dirname, "./filters1.spec.js")]
});
