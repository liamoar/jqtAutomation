import * as promoObj from '../../page_objects/promoCodeObj'

describe('Promo Code', () => {
    
    before(()=> {
        cy.CMSLogin()
        cy.get(':nth-child(11) > a > .fa').click()
       // cy.fixture('api.json').as('api')
        //cy.fixture('values.json').as('profile')
    });

    beforeEach(() => {
        cy.fixture('api.json').as('api')
    });

    it('Create a promo code', function() {
       // promoObj.createNewPromoCode('new code')
        promoObj.GetPromoCode() 
    });

    it('Scan the Promo Code', function() {
       cy.log('avinash')
       let code = this.api.promoCode
       promoObj.ScanPromoCode(code) 
    });
});

