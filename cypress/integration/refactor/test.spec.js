import * as loginObj from '../../page_objects/loginobj' 

describe('assert data', () => {
    
    beforeEach(function(){
     loginObj.navigateFrontendUser()
     cy.get('.btn').click()
     cy.get('[href="/profile"]').click()
     cy.get('.col-prf-left > :nth-child(3) > .col-lg-8 > p').invoke('text').as('userid')
    });

    it('get somthing', function() {
        var getid = this.userid
        cy.log(getid)
        cy.task('checkFileExists', "cypress/fixtures/test.json").then(status => {
            if(!status){
                cy.writeFile("cypress/fixtures/test.json", [{ class: getid }])
            }else{
                cy.readFile("cypress/fixtures/test.json").then(data => {
                    if(Array.isArray(data)){
                        data.push({ class: getid });
                        var fileData = data;
                    }else{
                        var fileData =  [data ,{ class: getid } ];
                    } 
                    cy.writeFile("cypress/fixtures/test.json", fileData);
                })

            }
        })
        
    });

});