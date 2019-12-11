// <reference types="Cypress" />

context('Loan code', () => {

    beforeEach(() => {
        cy.CMSLogin()
    //   cy.visit('https://uat-admin.jqt01.com')
    //   cy.get('#user-Username').type('admin')
    //   cy.get('#user-CurrentPassword').type('123Admin@')
        cy.get('.btn').click()
        cy.fixture('values.json').as('profile')
    })

    it('loan page module', function() {
        cy.get(':nth-child(5) > a > .fa').click()
        .url()
        .should('contain','/system/loan')
        .get('tbody').find('tr').should('have.length',19)
       
        // check sorting 
        cy.get('tbody > :nth-child(1) > :nth-child(1)').as('firstvalue')
       
       // amount sorting---case2
        //cy.get('table').contains('td', 'jacobs').should('be.visible');
        cy.get(':nth-child(1) > .text-dark').click()
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('not.contain', '@firstvalue')

        //create Loan --CASE_3
        cy.get('#addNew').click()
        .url()
        .should('contain','system/loan/new')
        .wait(1000)

        //check date format 
        const todaydate = Cypress.moment().format('YYYY-MM-DD')
        cy.get('#expire').as('6month')
        .should('not.contain',todaydate)
        //submit button should be disabled
        cy.get('.btn-primary').should('be.disabled')
        //check inactive user
        let inactiveuser = 'user1115@mailinator.com'
       // let activeuser = cy.readFile('cypress/fixtures/values.json').

    
      
        let activeuser = this.profile.id
        cy.get('.select2-selection').type('user115@')
        cy.log('This '+ inactiveuser +' is inactive so the user list should not be visible')
        cy.wait(1000)
        cy.get('.select2-search__field').clear()
        .type(activeuser)
        cy.get('.select2-results__option').should('contain', activeuser).click()
        //type amount
        cy.get('#amount').type(-20)
        cy.get('.btn-primary').should('be.disabled')
        cy.wait(1000)
        cy.get('#amount').clear().type(20)
        cy.get('.btn-primary').should('be.enabled')
        //process the loan
        cy.get('.btn-primary').click()
        .wait(2000)
        .url()
        .should('contain','system/loan')
        //check if that user is assigned a loan or not
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain',activeuser)
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain','pending')
    });
  
  })


  describe('validate the assigned loan code in user module', () => {
        it('Login to user module', () => {
            //cy.visit('https://uat.jqt01.com/')
            cy.Login()
            .wait(2000)
            .get('.btn').click()
            .get('[href="/profile"]').click()
            cy.get(':nth-child(6) > .col-lg-8 > .card > .card-body > div > :nth-child(2)').scrollIntoView()
            cy.screenshot()
            cy.get('.card-body > div > :nth-child(3)').should('contain', '20 JQT')
        }); 
  });


  describe('Change loan code stataus from admin module', () => {

     before(() => {
        cy.visit('https://uat-admin.jqt01.com')
        cy.get('#user-Username').type('admin')
        cy.get('#user-CurrentPassword').type('123Admin@')
        cy.get('.btn').click()
        cy.fixture('values.json').as('profile')
     });
        
        it('laon page module',function(){
            cy.get(':nth-child(5) > a > .fa').click()
            //search for loan assigned user
            let activeuser1= this.profile.id
            //cy.log(activeuser1)
            cy.wait(1000)
            cy.get('.form-control').type(activeuser1)
            cy.get('.form-row > :nth-child(2) > .btn').click()
            
            //edit the loan 
            cy.get('tbody > :nth-child(1) > :nth-child(5)').then((wizard)=>{
              //cy.log(wizard.text())
              //let editBUtton = cy.writeFile('cypress/fixtures/table.json', {editbutton : wizard.text()})
               if(wizard.text() == 'Edit \n  Delete\n \n            Paid\n          '){
                    cy.wait(1000)
                    cy.get(':nth-child(1) > :nth-child(5) > span > .btn-primary').click()
                    cy.log('if loop')
                    cy.get('.btn-primary').should('be.disabled')
                    cy.get('#expire').as('expiry')
                    cy.get('#expire').clear()
                    .type('2020-01-06').should('not.contain','@expiry')
                    cy.get(':nth-child(4) > .col-sm-2').click()
                    cy.get('.btn-primary').should('be.enabled').click()
                    cy.screenshot('expiry date change')
                    cy.wait(1000)
                    cy.get('.form-control').type(activeuser1)
                    //cy.wait(2000)
                    cy.get('.form-row > :nth-child(2) > .btn').click()
                    cy.wait(1000)

                    cy.get('tbody > :nth-child(1) > :nth-child(5)').then((check)=>{
                        if(check.text()== 'Edit \n  Delete\n \n            Paid\n          '){
                            cy.wait(1000)
                            cy.get(':nth-child(5) > button.btn-primary').click()
                            cy.get('.btn-success').click()
                        }
                        else{
                            cy.get('#accordion > .active > a').click()
                        }
                    })
               }else{
                cy.log('else loop')
                cy.get('#accordion > .active > a').click()
               }
            })
            cy.wait(2000)
            cy.get('#accordion > :nth-child(1) > a > .fa').click()
        });
   });

 describe('check loan after status paid in usermodule', () => {
    it('check user profile', () => {
        cy.Login()
        //cy.visit('https://uat.jqt01.com/')
        cy.wait(2000)
        .get('.btn').click()
        cy.wait(2000)
        .get('[href="/profile"]').click()
        cy.get(':nth-child(6) > .col-lg-8 > .card > .card-body > div > :nth-child(2)').scrollIntoView()
        cy.screenshot('laon added to jqt')
        
    });
    
  });   