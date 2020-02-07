export function getWalletAddres(){
    var currentToken = localStorage.getItem('access_token')
    let token = currentToken
    cy.log("hello", token)
    cy.get('.dropdown > .btn').click()
    cy.get('[href="/profile"]').click()
    var option = {
        url : "https://live-api.jqt01.com/api/v1/profile",
        method: 'GET',
        failOnStatusCode: false,
        headers : {'Authorization': "Bearer " + token}
    }
    cy.request(option).then((apidata)=>{
        //debugger
        var address = apidata.body.data.address
        var avaiTicket = apidata.body.data.ticket.available
        cy.log('my address' + address)
        cy.log('Available ticket ' + avaiTicket)
        cy.writeFile('cypress/fixtures/walletAddress.json',{WallAdd : address, Ticket: avaiTicket})
    })
    
}

export function generatePin(){
    var currentToken = localStorage.getItem('access_token')
    let token = currentToken
    cy.get('.dropdown > .btn').click()
    cy.get('[href="/generate-pin"]').click()
    cy.get('form > .btn').click()
    var option = {
        url : "https://live-api.jqt01.com/api/v1/pin?page=1",
        method: 'GET',
        failOnStatusCode: false,
        headers : {'Authorization': "Bearer " + token}
    }
    cy.request(option).then((apidata)=>{
        //debugger
        var pin = apidata.body.data.list[0].code
        cy.log(pin)
        cy.writeFile('cypress/fixtures/pin.json',{pinn : pin})
    })
    // cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').as('pin')
    // cy.wait(2000)
    // cy.log(this.pin)
    // let pin
    // cy.get('tbody > :nth-child(1) > :nth-child(2)').then((elm)=>{
    //      pin=elm.text()
          
    // })
    //  cy.log(pin)
    //cy.log(generatePin)
}

export function scanShoppingCode(walletAddress, pin, ticket){
    var price = 10
    if(price <= ticket){
        cy.log('test')
        //visit ticket claim page
        cy.UserLogin()
        cy.visit('https://live.jqt01.com/point-claim/'+ walletAddress)
        //store login
  
        //claim ticket page
        cy.get(':nth-child(1) > .col-sm-8 > .form-control').click().type(price)
        
        cy.get(':nth-child(3) > .col-sm-8 > .form-control').type(pin)
        cy.get('.offset-sm-3 > .btn').click()
        cy.get('.alert > div').should('contain','Ticket Successfully Picked Up!')
    }
    else{
        //visit ticket claim page
        cy.visit('https://live.jqt01.com/point-claim/'+ walletAddress)
        //store login
        cy.get('#email').type('testlives@mailinator.com')
        cy.get('#password').type('Test@1234')
        cy.get('form > :nth-child(2) > .btn').click()
        cy.wait(2000)
        //claim ticket page
        cy.get(':nth-child(1) > .col-sm-8 > .form-control').click().type(price)
        
        cy.get(':nth-child(3) > .col-sm-8 > .form-control').type(pin)
        cy.get('.offset-sm-3 > .btn').click()
        cy.get(':nth-child(2) > .col-sm-8 > .text-danger').should('contain','*Insufficient balance')
    }
}