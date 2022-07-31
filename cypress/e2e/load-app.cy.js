/// <reference types="Cypress" />

// get vs contains with text content https://docs.cypress.io/guides/references/best-practices#Text-Content

describe('Application rendering', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should make an http request', () => {
    cy.request('http://localhost:8000').should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('length').and.to.be.greaterThan(0);
      expect(response).to.have.property('headers');
    });
  });
  it('should render application components', () => {
    cy.visit('/').title().should('equal', 'Black Tech Daily');
    cy.get('[data-cy="navbar-title"]');
  });
  it('should switch to dark mode', () => {
    cy.get('[data-cy="mode-switch"]').click();
  });
  it.skip('should reload the appliaction', () => {
    cy.reload();
  });
});
