describe('Shopping code', () => {
    
    it('login', () => {
        cy.Login()
    });

    it('generate ticket page', function() {
        cy.wait(2000)
        cy.get('.btn').click()
        cy.get('[href="/profile"]').click()
        cy.get('.col-prf-right > :nth-child(6) > .col-lg-8').scrollIntoView()
        cy.get(':nth-child(2) > .col-lg-8 > .break').invoke('text').as('walletAddress')
        cy.screenshot('profileBeforeScan')
        cy.get('.dropdown > .btn').click()
        cy.get('[href="/generate-pin"]').click()
        //cy.get('form > .btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').as('code')
        cy.get('.dropdown > .btn').click(2000)
        cy.get('.dropdown-menu > :nth-child(6)').click()
        cy.wait(2000)

    });

    it('scan the code', function(){
        var shopcode = this.code
        var wallet = this.walletAddress
        cy.visit('https://uat.jqt01.com')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#email').type('avishr44+1@gmail.com')
        cy.get('#password').type('123Admin@')
        cy.get('form > :nth-child(2) > .btn').click()
        cy.wait(2000)
        cy.visit('https://uat.jqt01.com/ticket-claim/'+wallet)
        .wait(1000)
        cy.get(':nth-child(1) > .col-sm-8 > .form-control').type('5')
        cy.get(':nth-child(3) > .col-sm-8 > .form-control').type(shopcode)

    });

});