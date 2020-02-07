import * as login from '.././page_objects/loginobj'


// Cypress.Commands.add('Login',()=>{
//     cy.visit('https://uat.jqt01.com')
//         .contains('button','Login').click()
//             cy.fixture('constant.json').then(constant => {
//             cy.get(constant.elements.emailInputfield).type(constant.variables_frontend.email)
//             cy.get(constant.elements.passwordInputfield).type(constant.variables_frontend.password)
//             cy.get(constant.elements.loginButton).click()
//     })
// })


// Cypress.Commands.add('Get_Ticket',()=>{
//     // cy.visit('https://uat.jqt01.com')
//     //     .contains('button','Login').click()
//     //         cy.fixture('constant.json').then(constant => {
//     //         cy.get(constant.elements.emailInputfield).type(constant.variables_frontend.email_store)
//     //         cy.get(constant.elements.passwordInputfield).type(constant.variables_frontend.password)
//     //         cy.get(constant.elements.loginButton).click()
//     //         cy.wait()
//     //         //got to exchange to ticket
          
//     // })
//     cy.wait(1000)
//     cy.get('.ml-auto > :nth-child(5) > a').click()
//     cy.get('.form-control').type('70')
//     cy.get('.col-md-12 > .btn').click()
    
// })


// Cypress.Commands.add('UserLogin',()=>{
    
//     var accessToken = {
//         method : 'POST',
//         url : 'https://uat-api.jqt01.com/api/v1/auth/token',
//         headers : {'Content-Type': 'application/json'},
//         failOnStatusCode: false,
//         body:{
//             client_id : 1,
//             client_secret: "YwVpTUjZGuEe7y5t",
//             email: "avishr44+1@gmail.com",
//             grant_type: "password",
//             password: "123Admin@"
//         }
//     }

//    cy.request(accessToken).then((elm)=>{
//        let get = 'Bearer ' +elm.body.access_token
//        cy.log(get)
//        cy.writeFile('cypress/fixtures/api.json', {token: get})
//    })

// })


Cypress.Commands.add('StoreLogin',function(){
    login.navigateFrontendStore()
})


Cypress.Commands.add('UserLogin',function(){
    login.navigateFrontendUser()
})

Cypress.Commands.add('CMSLogin',()=>{
    cy.visit('https://live-admin.jqt01.com')
    cy.get('#user-Username').type('admin')
    cy.get('#user-CurrentPassword').type('123Admin@')
    cy.get('.btn').click()
    .url()
    .should('contain','/system')
    .wait(2000)
    //cy.eyesCheckWindow('CMS Dashboard')
})

Cypress.Commands.add('CmsLogin', function(){
    login.navigateCmsLogin()
})