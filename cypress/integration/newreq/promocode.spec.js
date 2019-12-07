describe('promo_code', () => {
    beforeEach(() => {
        cy.CMSLogin()
        cy.get(':nth-child(11) > a > .fa').click()
    });

    it('Promo code page', () => {
        const today = Cypress.moment().format('YYYY-MM-DD')
        const tomo = Cypress.moment().add(1,'days').format('YYYY-MM-DD')
        //!Add new code
        cy.get('#addNew > .fa').click()
        .url()
        .should('contains', '/promo_code')
        cy.get('.btn-primary').should('be.disabled')
        cy.get('#name').type('Offer1')
        cy.get('#point').type('40')
        cy.get('#expire').type('{enter}')
        
        cy.get('#validity_date').type(tomo)
        cy.get('#validity_date').type('{enter}')
        //cy.get('.btn-primary').should('be.enabled').click()
        //!if you uncomment upper code please remove down code 
        cy.get(':nth-child(11) > a > .fa').click()
        cy.wait(3000)
       //!parse api

       var options = {
        url: '/system/promo_code/all?page=1',
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      }
      
      cy.request(options).then((data)=>{
       var a= data.body.list[0].code
       cy.log(a)
       //logout
        cy.get('.header-avatar').click()
        cy.get('a.dropdown-item').click().wait(2000)
        
        cy.request('https://uat.jqt01.com/')
        var getAccessToken ={
            url: 'https://uat.jqt01.com/'
        }

        .wait(2000)
        //cy.get(':nth-child(2) > .btn').should('contain','Login')
        //  cy.get(':nth-child(2) > .btn').then((data)=>{
        //     cy.log(data.text())
        //     if(data.text()=='Login'){
        //         cy.log('success')
        //         cy.get(':nth-child(2) > .btn').click()
        //         cy.get('#email').type('avishr44@gmail.com')
        //         cy.get('#password').type('123Admin@')
        //         cy.get('form > :nth-child(2) > .btn').click()
        //         cy.wait(2000)
        //         cy.request('https://uat.jqt01.com/code-claim/'+a)
        //     }else{
        //         cy.log('fail')
        //         cy.wait(2000)
        //         cy.visit('https://uat.jqt01.com/code-claim/'+a)

        //     }
        // })
        
        
        //  if(cy.get('h1').contains('LOGIN').then((elm)=>{
        //     cy.get('#email').type('avishr44@gmail.com')
        //     cy.get('#password').type('123Admin@')
        //     cy.get('form > :nth-child(2) > .btn').click()

        //     cy.wait(1000)
        //     cy.visit('https://uat.jqt01.com/code-claim/'+a)
        //  }))
        //  else(){

            var login = {
                url : 'https://uat-api.jqt01.com/api/v1/profile',
                method: 'GET',
                headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE4NywiSWQiOjQ2NjAsIkNsaWVudElkIjoxLCJBZG1pbklkIjoiIiwiZXhwIjoxNTc1NTMyNzkxfQ.rGfA5R397gzdR6R_KV_mSGDrx9aGuLWoA8ULtkBvum0'},
                //ailOnStatusCode : false,
                
              }

            cy.request(login).then((elm)=>{
                cy.log(elm.status)
                if(elm.body.message == 'Authorization header is not included'){
                    cy.log('Not logged in user')
                    cy.get(':nth-child(2) > .btn').click()
                    cy.get('#email').type('avishr44@gmail.com')
                    cy.get('#password').type('123Admin@')
                    cy.get('form > :nth-child(2) > .btn').click()
                    cy.wait(2000)
                    cy.route('https://uat.jqt01.com/code-claim/'+a)
                }
                else{
                    cy.log('fail')
                    cy.visit('https://uat.jqt01.com/code-claim/'+a)
                }
            })

    })

    });
    
});

