import { addToStorage } from "../../helper/helper";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("fills inputs and clicks button", () => {
    cy.visit("/");
    // cy.get('input[name="firstName"]').type("");
    cy.get('input[name="lastName"]').type("Akin");
    cy.get('input[name="email"]').type("lape@gmail.com");
    cy.get('input[name="password"]').type("Password");
    // cy.get('input[name="confirmPassword"]').type(" ");
    // cy.get(".btn").click();

    // Assert that the form submission was successful
    cy.get("form").submit();

    // cy.url().should("include", "/dashboard");
    cy.get(".err").should("be.visible");
  });

  it("fills inputs and submit forms", () => {
    cy.visit("/");
    cy.get('input[name="firstName"]').type("Lape");
    cy.get('input[name="lastName"]').type("Akin");
    cy.get('input[name="email"]').type("lape@gmail.com");
    cy.get('input[name="password"]').type("Password");
    cy.get('input[name="confirmPassword"]').type("Password");
    cy.get("form").submit();
    addToStorage(
      {
        userId: 1,
        email: "lape.akintan@gmail.com",
        firstName: "lape",
        lastName: "Akin",
      },
      "xsyuhh126ghhh"
    );
    cy.url().should("include", "/dashboard");
  });
});
