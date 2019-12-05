
module.exports = {
    testdata  : describe('module', () => {
    
        function getSome(){
            cy.Login()
                .wait(2000)
                .get('.btn').click()
                .get('[href="/profile"]').click()
                cy.get('.form-inline > .form-group').invoke('text').as('KYC')
            
        }
            before(function() {
                getSome()
            });
            it('test', function()  {
                let id = this.KYC
                cy.log(id)
            });
    })


}







