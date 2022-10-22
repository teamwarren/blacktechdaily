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
    cy.findByRole('button', {
      name: 'open drawer',
    });
    cy.findByRole('textbox', {
      name: 'search',
    });
    cy.findByRole('checkbox'); // mui toggle button
    cy.findByRole('tablist', {
      name: 'navigation tabs',
    });
    cy.findByRole('tab', {
      name: 'Community',
    });
    cy.findByRole('tab', {
      name: 'Home',
    });
    cy.findByRole('tab', {
      name: 'Events',
    });
  });
});
