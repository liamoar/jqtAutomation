
export function assignLoanCode(user){

    cy.get(':nth-child(5) > a > .fa').click()
    .url()
    .should('contain','/system/loan')
    .get('tbody').find('tr').should('have.length',21)
   
    // check sorting 
    cy.get('tbody > :nth-child(1) > :nth-child(1)').as('firstvalue')
   
   // amount sorting---case2
    //cy.get('table').contains('td', 'jacobs').should('be.visible');
    cy.get(':nth-child(1) > .text-dark').click()
    cy.wait(2000)
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('not.contain', '@firstvalue')

    //create Loan --CASE_3
    cy.get('#addNew').click()
    .url()
    .should('contain','system/loan/new')
    .wait(1000)

    //check date format 
    const todaydate = Cypress.moment().format('YYYY-MM-DD')
    cy.get('#expire').as('6month')
    .should('not.contain',todaydate)
    //submit button should be disabled
    cy.get('.btn-primary').should('be.disabled')
    //check inactive user
    let inactiveuser = 'user1115@mailinator.com'
   // let activeuser = cy.readFile('cypress/fixtures/values.json').

   cy.get('.select2-selection').type('user115@')
   cy.log('This '+ inactiveuser +' is inactive so the user list should not be visible')
   cy.wait(1000)
   cy.get('.select2-search__field').clear()
   .type(user)
   cy.get('.select2-results__option').should('contain', user).click()
   //type amount
   cy.get('#amount').type(-20)
   cy.get('.btn-primary').should('be.disabled')
   cy.wait(1000)
   cy.get('#amount').clear().type(20)
   cy.get('.btn-primary').should('be.enabled')
   //process the loan
  // cy.get('.btn-primary').click()
   .wait(2000)
   .url()
   .should('contain','system/loan')
   //check if that user is assigned a loan or not
   cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain',user)
   cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain','pending')
}