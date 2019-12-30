import * as loginObj from '../../page_objects/loginobj'
import * as shoppingCodeObj from '../../page_objects/shoppingCodeObj'
describe('shopping code', function(){
    before(function(){
        loginObj.navigateFrontendUser()
    })

    beforeEach(function(){
        //loginObj.navigateFrontendUser()
        cy.fixture('walletAddress.json').as('walletAddress')
        cy.fixture('pin.json').as('pin')
    })

    it('Generate Pin',function(){
        shoppingCodeObj.getWalletAddres()
        shoppingCodeObj.generatePin()
        cy.wait(2000)
    })
    it('scan shopping code', function(){
        //loginObj.navigateFrontendStore()
        var walletAddress = this.walletAddress.WallAdd
        var avaiTicket = this.walletAddress.Ticket
        var pin = this.pin.pinn
        cy.log('scan shopping code vitra aayeko wallet address' + walletAddress)
        
        shoppingCodeObj.scanShoppingCode(walletAddress, pin, avaiTicket)
    })
})