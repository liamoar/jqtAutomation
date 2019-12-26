import * as loginobj from '../../page_objects/loginobj'
import * as storeobj from '../../page_objects/storeobj'

describe('check store info', () => {
    
    before(() => {
        loginobj.navigateFrontendStore()
    });
    
    beforeEach(function() {
        cy.get('.btn').click()
        cy.get('[href="/store-info"]').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-lg-8 > .form-control').invoke('text').as('storeName')
        cy.get(':nth-child(2) > form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-lg-4').invoke('text').as('name')
    });

    it('should check store info', function() {
       //cy.log(this.name)
       storeobj.checkStoreToggleButton()
    });
});