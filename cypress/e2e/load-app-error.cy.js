/// <reference types="Cypress" />

describe('Application rendering', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should make an http request', () => {
    cy.request('http://localhost:8000').should(response => {
      expect(response.status).to.eq(500);
    });
  });
});
