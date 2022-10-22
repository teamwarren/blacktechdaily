describe('Application rendering', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should switch to dark mode', () => {
    cy.findByRole('checkbox').click();
  });
});
