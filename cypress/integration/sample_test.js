describe('Index page', () => {
  it('fill in pokemon name', () => {
    cy.visit('http://127.0.0.1:3000')

    cy.get('[data-test-id="name-input"]')
	      .type('Pikachu').should('have.value', 'Pikachu')
  })

  it('should display success message being provided with correct name', () => {
    cy.contains('Catch').click()
    cy.contains('Got one. 806 to go.')
  })

  it('should display error message being provided with incorrect name', () => {
    cy.get('[data-test-id="name-input"]')
      .clear()
      .type('Non-existant pokemon name')

    cy.contains('Catch').click()
    cy.contains('Request failed with status code 404')
  })
})
