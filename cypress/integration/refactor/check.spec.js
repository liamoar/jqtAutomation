describe('check', () => {
    it('login', () => {
        cy.visit('https://uat-admin.jqt01.com/')
        cy.get('#user-Username').type('admin')
        cy.get('#user-CurrentPassword').type('123Admin@')
        cy.get('.btn').click()

        cy.get('.dropdown > .nav-link').click()
        cy.get('a.dropdown-item').click()
        cy.visit('https://uat.jqt01.com/')
        var option = {
            url : 'https://uat-api.jqt01.com/api/v1/profile',
            method: 'GET',
            failOnStatusCode: false,
            headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE4NSwiSWQiOjQ5NTMsIkNsaWVudElkIjoxLCJBZG1pbklkIjoiIiwiZXhwIjoxNTc1ODk3NzU1fQ.Y7nePqB8nJuicYtnQIGdj2pP5TLgvCRk7vqlGjkPyUc'} 
        }
        cy.request(option).then((elm)=>{
            cy.log(elm.status)
            if(elm.status == 200){
                cy.log('not logged in')
                cy.get(':nth-child(2) > .btn').click()
                cy.get('#email').type('avishr44+1@gmail.com')
                cy.get('#password').type('123Admin@')
                cy.get('form > :nth-child(2) > .btn').click().wait(2000)
                // cy.window().then(
                //     window =>  cy.writeFile('cypress/fixtures/api.json', {token: window.localStorage.getItem("access_token")},{ flag: 'a+'}) 
                //  );
                // //var key = window.localStorage.getItem(elm.access_token)
                //cy.log(key)
            }else{
                cy.log('logged in')
            }
        })

    });

});