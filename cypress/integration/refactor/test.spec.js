describe('test', () => {
  
    it('test', () => {
        cy.visit('uat-admin.jqt01.com')
        //send request to if the user is loggedin or not
        var options = {
            url : 'https://uat-admin.jqt01.com/system/dashboard/all',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            failOnStatusCode: false,
        }
   
       cy.request(options).then((elm)=>{
           if(elm.status == 401){
               cy.log("User is not logged in ")
               cy.get('#user-Username').type('admin')
               cy.get('#user-CurrentPassword').type('123Admin@')
               cy.get('.btn').focus().click()
           }else{
               cy.log("loggedin")
           }
        })

    });

});