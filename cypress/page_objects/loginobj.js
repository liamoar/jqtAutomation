 
/// <reference types="cypress" />

export function navigateFrontendUser(){
    
    cy.visit('https://uat.jqt01.com/')
    cy.window().then(win => {
        var currentToken = win.localStorage.getItem('access_token');
        cy.log(currentToken, "currentToken");
        cy.wait(2000)
        var option = {
            url: 'https://uat-api.jqt01.com/api/v1/profile',
            method: 'GET',
            failOnStatusCode: false,
        }

       
        // Token null or not
        if (currentToken != null) { // Logged In User
            let token = currentToken;
            option.headers = { 'Authorization': "Bearer " + token }
            cy.request(option).then((elm) => {
                cy.log(elm, option)
                cy.log('logged status', elm.status)
                cy.log("confuse vaiyo hai")
                if (elm.status == 401) {
                    // Login Again
                    cy.log('not logged in')
                    cy.get(':nth-child(2) > .btn').click()
                    cy.get('#email').type('storeuser1@mailinator.com')
                    cy.get('#password').type('123Admin@')
                    cy.get('form > :nth-child(2) > .btn').click().wait(2000)
                    // cy.window().then(
                    //     window =>  cy.writeFile('cypress/fixtures/api.json', {token: window.localStorage.getItem("access_token")},{ flag: 'a+'}) 
                    //  )
                } else {
                    cy.log('ya xu hai vitra ko else ma')
                }
            })
        } else {
            cy.log("ma baira xu hai ")
                .get(':nth-child(2) > .btn').click()
                .get('#email').type('storeuser1@mailinator.com')
                .get('#password').type('123Admin@')
                .get('form > :nth-child(2) > .btn').click().wait(2000)
           // .visit('https://uat.jqt01.com/code-claim/9ae6c992-d402-4d9b-92d3-411eed36088e')
            
        }

    });
}


export function navigateFrontendStore(){
    cy.visit('https://uat.jqt01.com/')
    cy.window().then(win => {
        var currentToken = win.localStorage.getItem('access_token');
        cy.log(currentToken, "currentToken");
        cy.wait(2000)
        var option = {
            url: 'https://uat-api.jqt01.com/api/v1/profile',
            method: 'GET',
            failOnStatusCode: false,
        }
        // Token null or not
        if (currentToken != null) { // Logged In User
            let token = currentToken;
            option.headers = { 'Authorization': "Bearer " + token }
            cy.request(option).then((elm) => {
                cy.log(elm, option)
                cy.log('logged status', elm.status)
                cy.log("confuse vaiyo hai")
                if (elm.status == 401) {
                    // Login Again
                    cy.log('not logged in')
                    cy.get(':nth-child(2) > .btn').click()
                    cy.get('#email').type('storeuser1@mailinator.com')
                    cy.get('#password').type('123Admin@')
                    cy.get('form > :nth-child(2) > .btn').click().wait(2000)
                    // cy.window().then(
                    //     window =>  cy.writeFile('cypress/fixtures/api.json', {token: window.localStorage.getItem("access_token")},{ flag: 'a+'}) 
                    //  )
                } else {
                    cy.log('ya xu hai vitra ko else ma')
                }
            })
        } else {
            cy.log("ma baira xu hai ")
                .get(':nth-child(2) > .btn').click()
                .get('#email').type('storeuser1@mailinator.com')
                .get('#password').type('123Admin@')
                .get('form > :nth-child(2) > .btn').click().wait(2000)
           // .visit('https://uat.jqt01.com/code-claim/9ae6c992-d402-4d9b-92d3-411eed36088e')
            
        }

    });
}
// export function navigateCmsLogin(){
//     cy.visit('uat-admin.jqt01.com')
//     //send request to if the user is loggedin or not
//      var options = {
//          url : 'https://uat-admin.jqt01.com/system/dashboard/all',
//          headers: {'X-Requested-With': 'XMLHttpRequest'},
//          failOnStatusCode: false,
//      }

//     cy.request(options).then((elm)=>{
//         if(elm.status == 401){
//             cy.log("User is not logged in ")
//             cy.get('#user-Username').type('admin')
//             cy.get('#user-CurrentPassword').type('123Admin@')
//             cy.get('.btn').wait(2000).click()
//         }else{
//             cy.log("loggedin")
//         }
//      })

    
// }

export function navigateCmsLogin(){
    cy.visit('uat-admin.jqt01.com')
            cy.get('#user-Username').type('admin')
            cy.get('#user-CurrentPassword').type('123Admin@')
            cy.get('.btn').click()
}