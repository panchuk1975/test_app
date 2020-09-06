describe("Input form", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("focuses input on load", () => {
    cy.visit("http://localhost:3000");
    cy.focused().should("have.class", "firstName");
  });

  it.only("accepts input", () => {
    const typedText = "Vadim";
    cy.visit("http://localhost:3000");
    cy.get(".firstName").type(typedText).should("have.value", typedText);
  });

  context("Form submission", () => {
    it.only("Adds a new todo on submit", () => {
     cy.server()
     cy.route('POST', 'api/employees', {
        firstName: "Vadim",
        secondName: "",
        status: "Busy",
        text: "",
     })
    });
  });

  it.only('Shows an error message on a failed sbmission', () => {
    cy.server()
    cy.route({
       url: 'api/employees',
       metod: 'POST',
       status: 500,
       response: {}
    })
  })
});
