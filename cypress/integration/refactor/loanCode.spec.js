import * as loanObj from '../../page_objects/loanCodeObj'


describe('loan code', () => {
   
    before(() => {
        cy.CmsLogin() 
    });
   

    beforeEach(function() {
        // cy.get('.btn').click()
        cy.fixture('values.json').as('profile')
    });

       
    it('Assign loan code to the user', function() {
        let activeuser = this.profile.id
        cy.log(activeuser)
        loanObj.assignLoanCode(activeuser)
    });

//     it('Validate the assign loan in user module', () => {
//         cy.UserLogin()
//         .wait(2000)
//         .get('.btn').click()
//         .get('[href="/profile"]').click()
//         cy.get(':nth-child(6) > .col-lg-8 > .card > .card-body > div > :nth-child(2)').scrollIntoView()
//         cy.screenshot()
//         cy.get('.card-body > div > :nth-child(3)').should('contain', '20 JQT')
//         //cy.CmsLogin()
//     });
 });