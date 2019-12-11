import * as loanObj from '../../page_objects/loanCodeObj'


describe('loan code', () => {
   
    before(() => {
        cy.CmsLogin() 
    });
    
    beforeEach(function() {
        // cy.get('.btn').click()
        cy.fixture('values.json').as('profile')
    });

    it('test', () => {
        cy.log('tst')
    });
    
    // it('Assign loan code to the user', function() {
    //     let activeuser = this.profile.id
    //     cy.log(activeuser)
    //     loanObj.assignLoanCode(activeuser)
    // });

    // it('Validate the assign loan in user module', () => {
    //     //cy.UserLogin()
    //     cy.CmsLogin()
    // });
});