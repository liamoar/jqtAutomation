describe('Profile', () => {

    beforeEach(function(){
        cy.Login()
            .wait(2000)
            .get('.btn').click()
            .get('[href="/profile"]').click()
            cy.get('.form-inline > .form-group').invoke('text').as('KYC')
            //userid    
            cy.get('.col-prf-left > :nth-child(3) > .col-lg-8 > p').invoke('text').as('userid')
            //available ticket
            cy.get('.col-prf-right > :nth-child(4) > .col-lg-8 > p').invoke('text').as('Ticket')
            //Ether
            cy.get(':nth-child(5) > .col-lg-8 > .card > .card-body > div > :nth-child(2)').invoke('text').as('Ether')
            //Jqt
            cy.get(':nth-child(6) > .col-lg-8 > .card > .card-body > div > :nth-child(2)').invoke('text').as('Jqt')
    });

    it('store value in json', function(){
        cy.writeFile('cypress/fixtures/values.json', {kyc: this.KYC, id: this.userid, avlTicket: this.Ticket, ether: this.Ether, jqt: this.Jqt})
    });

});

