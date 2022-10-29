describe('Application redirects - footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have a GitHub link', () => {
    cy.findByRole('link', { name: 'Black Tech Daily' })
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://github.com/teamwarren/blacktechdaily'
      );
  });
  it('should open the second article in a new window', () => {
    cy.findByRole('link', { name: 'Black Tech Daily' })
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'https://github.com/teamwarren/blacktechdaily');
    cy.findByRole('link', { name: 'teamwarren' });
  });
});
