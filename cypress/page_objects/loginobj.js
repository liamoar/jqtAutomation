 
/// <reference types="cypress" />

export function navigateFrontendUser(){
    cy.visit('https://uat.jqt01.com/')
    var option = {
        url : 'https://uat-api.jqt01.com/api/v1/profile',
        method: 'GET',
        failOnStatusCode: false
    }
    cy.request(option).then((elm)=>{
        cy.log(elm.status)
        if(elm.status == 401){
            cy.log('not logged in')
            cy.get(':nth-child(2) > .btn').click()
            cy.get('#email').type('avishr44@gmail.com') 
            cy.get('#password').type('123Admin@')
            cy.get('form > :nth-child(2) > .btn').click().wait(2000)
            cy.window().then(
                window =>  cy.writeFile('cypress/fixtures/token.json', {token: window.localStorage.getItem("access_token")}) 
             );
        }else{
            cy.window().then(
                window =>  cy.writeFile('cypress/fixtures/token.json', {token: window.localStorage.getItem("access_token")}) 
             );
        }
    })
}


export function navigateFrontendStore(){
    cy.visit('https://uat.jqt01.com/')
    var option = {
        url : 'https://uat-api.jqt01.com/api/v1/profile',
        method: 'GET',
        failOnStatusCode: false
    }
    cy.request(option).then((elm)=>{
        if(elm.status == 401){
            cy.log('not logged in')
            cy.get(':nth-child(2) > .btn').click()
            cy.get('#email').type('avishr44+1@gmail.com')
            cy.get('#password').type('123Admin@')
            cy.get('form > :nth-child(2) > .btn').click().wait(2000)
            //let key = window.localStorage.setItem('token',elm.data.access_token)
            //cy.log(key)
        }else{
            cy.log('logged in')
        }
    })
}