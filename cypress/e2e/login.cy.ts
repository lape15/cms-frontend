describe("Loginpage", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.get("h3").should("be.visible");
  });

  it("submits user form after fields and routes to dashboard if credentials,valid", () => {
    cy.visit("/login");
    cy.get("input#email").type("lape@gmail.com");
    cy.get("input#password").type("Password");
    cy.get("#form").submit();
    cy.url().should("include", "/dashboard");
  });
});

export {};
