import * as promoObj from '../../page_objects/promoCodeObj'

describe('Promo Code', () => {
    
    before(()=> {
        cy.CMSLogin()
        cy.get(':nth-child(11) > a > .fa').click()
    });

    beforeEach(() => {
        cy.fixture('api.json').as('api')
    });
    
  it('Create a promo code', function() {
       // promoObj.createNewPromoCode('new code')
        promoObj.GetPromoCode().then((data)=>{
             cy.log(data)
           });
    });
    
    it('Scan the Promo Code', function() {
        cy.log(this.api.promoCode)
        promoObj.ScanPromoCode()
        cy.visit('https://uat.jqt01.com/code-claim/'+this.api.promoCode)
    });
});

