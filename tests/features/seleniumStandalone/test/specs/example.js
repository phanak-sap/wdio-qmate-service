describe("assertion", () => {
  it("should assert all globals are in place", () => {
    expect(common).toBeTruthy();
    expect(ui5).toBeTruthy();
    expect(nonUi5).toBeTruthy();
    expect(util).toBeTruthy();
  });
});