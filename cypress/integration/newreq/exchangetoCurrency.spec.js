describe('Exchange to Currency', () => {
    
    beforeEach( function() {
       // cy.visit('https://uat.jqt01.com/')
       cy.StoreLogin()
       cy.get('.ml-auto > :nth-child(3) > a').click()
       cy.get(':nth-child(6) > td > .second-inner > p').invoke('text').as('ticketcount')

    });
  
    
    it('exchange to currecny page', function() {
       cy.get('.ml-auto > :nth-child(3) > a').click()
       //check for the total ticket
       cy.get(':nth-child(6) > td > .second-inner > p').then((elem)=>{
           if(elem.text()== 0){
            cy.log('i am here')   
            cy.Get_Ticket()
            //cy.GiveTicket()  
           }
           else{                                                             
            let ticket = this.ticketcount
            cy.log(ticket)
            cy.get('.form-control').type(ticket-30)
            cy.get('.col-md-12 > .btn').focus().click()
            cy.get(':nth-child(5) > .form-group > .col-lg-8 > p').then((elem)=>{
                var isNEgative = elem.text()
                cy.log(isNEgative)
            })
            cy.get('.alert > div').then((elem)=>{
                if(elem.text()=='Payout amount is too low!'){
                    cy.log('success')
                    cy.Get_Ticket()
                    cy.get('.ml-auto > :nth-child(3) > a').click()
                    cy.get('.form-control').type(ticket-30)
                    cy.get('.col-md-12 > .btn').focus().click()
                }
                else{
                    cy.log('Transation is success')
                }
            })
           }
       })
       
    });
});