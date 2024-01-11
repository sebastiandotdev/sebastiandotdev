import { Title } from './Title'

it('Should render title', () => {
  cy.mount(<Title />)

  cy.get('h2').should('not.be.undefined')
})

it('should not render children', () => {
  cy.mount(<Title>Hola</Title>)

  cy.get('h2').should('contain.text', 'Hola')
})
