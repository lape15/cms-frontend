import { addToStorage } from "../../helper/helper";

describe("template spec", () => {
  beforeEach(() => {
    addToStorage(
      {
        userId: 1,
        email: "lape.akintan@gmail.com",
        firstName: "lape",
        lastName: "Akin",
      },
      "xsyuhh126ghhh"
    );
  });
  it("passes", () => {
    cy.visit("/");
  });

  it("goes to dashboard", () => {
    cy.visit("/dashboard");
    cy.url().should("include", "/dashboard");
  });

  it("clicks all menu items and shows content", () => {
    cy.visit("/dashboard");
    cy.get(".menu").children().click({ multiple: true });
  });

  it("clicks new post btn, and opens new post sectn", () => {
    cy.visit("/dashboard");
    cy.get("#create").click();
    cy.get(".create_wrapper").should("be.visible");
  });
});
export {};
