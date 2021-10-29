"use strict";

describe("navigationBar - click User Icon", function () {

  const signoutButton = {
    "elementProperties": {
      "metadata": "sap.m.Popover",
      "id": "sapUshellMeAreaPopover"
    }
  };

  it("Preparation", async function () {
    browser.config.baseUrl = "https://hc7-715.wdf.sap.corp/ui";
    await browser.navigateTo("https://hc7-715.wdf.sap.corp/ui");
    await ui5.session.login("PURCHASER");
    await ui5.navigation.navigateToApplication("Shell-home", true);
    await ui5.navigation.closePopups();
    await ui5.navigationBar.expectShellHeader();
  });

  it("Execution and Verification", async function () {
    await expect(ui5.assertion.expectToBeVisible(signoutButton))
      .rejects.toThrow(/No visible elements found/);

    await ui5.navigationBar.clickUserIcon();
    await ui5.assertion.expectToBeVisible(signoutButton, 0, 60000);
  });
});

describe("navigationBar - click User Icon (wrong case)", function () {

  it("Preparation", async function () {
    await browser.navigateTo("https://www.sap.com/index.html");
  });

  it("Execution and Verification", async function () {
    await expect(ui5.navigationBar.clickUserIcon())
      .rejects.toThrowError("waitUntil condition failed with the following reason:");
  });
});