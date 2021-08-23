const path = require("path");
const merge = require("deepmerge");
const qmateConfig = require("../../../../../configurations/chrome.headless.conf.js");
exports.config = merge(qmateConfig.config, {
  maxInstances: 6,
  bail: 1,
  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    path.resolve(__dirname, "waitForElementIsPresent.spec.js"),
    path.resolve(__dirname, "getDisplayedElements.spec.js"),
    path.resolve(__dirname, "waitForAllElements.spec.js"),
    path.resolve(__dirname, "waitForElementIsVisible.spec.js"),
    path.resolve(__dirname, "waitForElementIsClickable.spec.js"),
    path.resolve(__dirname, "getElementByCss.spec.js"),
    path.resolve(__dirname, "getElementById.spec.js"),
    path.resolve(__dirname, "getElementByClass.spec.js"),
    path.resolve(__dirname, "getElementByXPath.spec.js"),
    path.resolve(__dirname, "getValue.spec.js"),
    path.resolve(__dirname, "getElementByChild.spec.js"),
    path.resolve(__dirname, "scrollToElement.spec.js"),
    path.resolve(__dirname, "highlightElement.spec.js"),
    path.resolve(__dirname, "switchToIframe.spec.js"),
    path.resolve(__dirname, "switchToWindow.spec.js"),
    path.resolve(__dirname, "switchToNewWindow.spec.js"),
    path.resolve(__dirname, "getCurrentWindow.spec.js"),
    path.resolve(__dirname, "getElementByName.spec.js"),
    path.resolve(__dirname, "getElementByCssContainingText.spec.js"),
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  services: [
    ["chromedriver", { port: 4444 }],
    ["static-server", {
      port: 34005,
      folders: [
        { mount: "/forms.html", path: path.resolve(__dirname, "../../website/forms.html") }
      ]
    }]
  ],

  // The number of times to retry the entire specfile when it fails as a whole
  //specFileRetries: 1,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ["spec"],
});
