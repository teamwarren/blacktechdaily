/// <reference types="Cypress" />

describe('Application redirects - footer', () => {
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
  it('should open the second article in a new window', () => {
    cy.get('[data-cy="github-link"]').click();
    cy.get('[data-cy="github-link"]').should('have.attr', 'target', '_blank');
  });
});
