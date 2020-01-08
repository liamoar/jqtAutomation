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
            //debugger
            if(!status){
                cy.writeFile("cypress/fixtures/test.json", [{ class: getid }])
            }else{
                cy.readFile("cypress/fixtures/test.json").then(data => {
                    let totalKeys = data.map(function(datum){return Object.keys(datum)[0] });
                    debugger
                    // if(Array.isArray(data)){
                    //     let totalKeys = data.map(function(datum){return Object.keys(datum)[0] });
                    //     if(totalKeys.includes('class')){
                    //         let index = totalKeys.indexOf("class");
                    //         data[index].class = getid;
                    //     }else{
                    //         data.push({"class":getid});
                    //     }
                        
                    //     fileData = data;
                    // }else{
                    //     var fileData =  [data ,{ class: getid } ];
                    // }
                    if(Array.isArray(data)){
                        cy.log(Object.keys(data))
                    } else{
                        cy.log('out')
                    }
                   // cy.writeFile("cypress/fixtures/test.json", fileData);
                })

            }
        })
        
    });

});