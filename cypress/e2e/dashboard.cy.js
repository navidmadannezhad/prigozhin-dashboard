/// <reference types="cypress" />

context('Dashboard tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('displays the simple line chart', () => {
    cy.get('.simple-line-chart').should("exist");
  })

  it('can open the delete records modal', () => {
    cy.get('.trashcan-button').click();
    cy.get('.delete-records-modal').should('exist');
  })
})
