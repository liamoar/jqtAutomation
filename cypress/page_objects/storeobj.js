
export function checkStoreToggleButton(){
    //cy.get('.btn').click()
    //cy.get('[href="/store-info"]').click()
    // cy().then((elm)=>{
    //     var currentToken = win.localStorage.getItem('access_token');
    // })
    var currentToken = localStorage.getItem('access_token')
    let token = currentToken
    var options ={
        url : 'https://uat-api.jqt01.com/api/v1/shop',
        method: 'GET',
        failOnStatusCode: false,
        headers : {'Authorization': "Bearer " + token}
    }
   
    cy.request(options).then((getData)=>{
        //debugger
         //cy.log(getData.body.data.status)
         // cy.log(getData.body.data.name)
        var storeName = getData.body.data.name
        cy.log('your store name is: ',storeName)
        if (getData.body.data.status == 'unpublish') {
            cy.log('eta xu ma')
            
            //visit store list page and search for the store 
            cy.get('.ml-auto > :nth-child(3) > a').click()
            cy.get(':nth-child(3) > .form-group > #inputAddress').type(storeName)
            cy.get(':nth-child(2) > .btn-primary').click()
            //cy.get('.col-lg-4 > span').should('contain','No Store Available!')
             
            //go to shop info and publish the shop
            cy.get('.btn').click()
            cy.get('[href="/store-info"]').click()
             
            //make slider on
            cy.get(':nth-child(2) > .title-head > .edit-del > button').click()
            cy.get('.slider').click()
            cy.get('.col-lg-8 > .btn-primary').click()

            //search for store name again
            cy.get('.ml-auto > :nth-child(3) > a').click()
            cy.get(':nth-child(3) > .form-group > #inputAddress').type(storeName)
            cy.get(':nth-child(2) > .btn-primary').click()
            
        } else {
            cy.log('baira xu hai ')
            cy.get('.ml-auto > :nth-child(3) > a').click()
            cy.get(':nth-child(3) > .form-group > #inputAddress').type(storeName)
            cy.get(':nth-child(2) > .btn-primary').click()

            //go to store module and toggle off 
            cy.get('.btn').click()
            cy.get('[href="/store-info"]').click()
        }
    })
}