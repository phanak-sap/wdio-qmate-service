"use strict";
const selectorForCloseButton = {
  "elementProperties": {
    "metadata": "sap.m.Button",
    "text": "Close"
  }
};
const selectorForErrorPopupText = {
  "elementProperties": {
    "metadata": "sap.m.Text",
    "ancestorProperties": {
      "elementProperties": {
        "metadata": "sap.m.Dialog",
        "type": "Message",
        "state": "Error"
      }
    }
  }
};

// Test is unstable - system itself can close the popup
// TODO: discuss local server usage for assertion tests execution
describe.skip("assertion - expectUnsupportedNavigationPopup", function () {
  it("Preparation", async function () {
    browser.config.baseUrl = "https://super-sensitive.domain.name/ui";
    await ui5.navigation.navigateToApplication("Shell-home", true);
    await ui5.session.loginFiori("PURCHASER", "super-duper-sensitive-pw", true);
  });

  it("Execution", async function () {
    await ui5.navigation.navigateToApplication("SomeWrong-intent", false);
  });

  it("Verification", async function () {
    await ui5.assertion.expectUnsupportedNavigationPopup("#SomeWrong-intent");
  });

  it("Clean Up", async function () {
    await ui5.session.logout();
  });
});

// Test is unstable - system itself can close the popup
// TODO: discuss local server usage for assertion tests execution
describe.skip("assertion - expectUnsupportedNavigationPopup with '&' (unhappy case, another error popup)", function () {
  it("Preparation", async function () {
    browser.config.baseUrl = "https://super-sensitive.domain.name/ui";
    await ui5.navigation.navigateToApplication("Shell-home", true);
    await ui5.session.loginFiori("PURCHASER", "super-duper-sensitive-pw", true);
  });

  it("Execution", async function () {
    await ui5.navigation.navigateToApplication("SomeWrongIntentWith&", false);
  });

  it("Verification", async function () {
    await expect(ui5.assertion.expectUnsupportedNavigationPopup("#SomeWrongIntentWith&"))
      .rejects.toThrow(/No visible elements found/);
    const textElement = await ui5.locator.getDisplayedElement(selectorForErrorPopupText);
    const text = await textElement.getText();
    await common.assertion.expectEqual(text, "Could not open app. Please try again later.");
  });

  it("Clean Up", async function () {
    await ui5.session.logout();
  });
});

describe("assertion - expectUnsupportedNavigationPopup (unhappy case - no popup - correct navigation)", function () {
  it("Preparation", async function () {
    browser.config.baseUrl = "https://super-sensitive.domain.name/ui";
    await ui5.navigation.navigateToApplication("Shell-home", true);
    await ui5.session.loginFiori("PURCHASER", "super-duper-sensitive-pw", true);
  });

  it("Execution and Verification", async function () {
    await ui5.navigation.navigateToApplication("PurchaseOrder-manage", false);
    await expect(ui5.assertion.expectUnsupportedNavigationPopup("#PurchaseOrder-manage"))
      .rejects.toThrow("uiControlExecuteLocator(): No visible elements found");
  });
});