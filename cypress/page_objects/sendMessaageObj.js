export function selectUser(user){
    // var user = 'normaluser1@mailinator.com'
    // cy.writeFile('cypress/fixtures/user.json',{User : user})
    //cy.get('#toggle-sidebar').click()
   
    cy.get(':nth-child(3) > a > .span-link').click()
    cy.wait(2000)
    cy.get('.form-row > :nth-child(1) > .form-control').type(user)
    cy.get(':nth-child(6) > .btn').click()
    
}

export function sendMessage(i, message){
    cy.wait(1000)
    cy.get('tr[data-v-666d2c56=""] > :nth-child(1) > input').click()
    cy.get('.content-display > :nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(1000)
    cy.get('.col-sm-12 > .form-control').type(message+ " " +i)
    cy.get('#message-form > .modal-dialog > .modal-content > form > .modal-footer > [type="submit"]').click()
    cy.get('.alert > p').should('contain', 'Message sent to 1 user')

}

export function checkNotification(user){
    cy.UserLogin()
   // cy.eyesCheckWindow('Before NOtification message')
    cy.reload().wait(2000)
    //cypress eyes
    //cy.eyesCheckWindow('NOtification message')
    cy.get('a > span').should('contain','5')
    cy.get(':nth-child(7) > a').click().wait(1000)
    cy.get(':nth-child(1) > .mb-0').should('contain', 'This is automated message 5')
    cy.get('.close > span').click()
    //cy.eyesClose()
}

export function logout(){
    cy.get('.btn').click().wait(1000)
    cy.get('.dropdown-menu > :nth-child(6)').click()
}