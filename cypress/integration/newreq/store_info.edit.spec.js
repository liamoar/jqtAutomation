describe('store edit info', () => {
    
    beforeEach(function() {
        cy.visit('https://uat.jqt01.com/')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#email').type('avishr44+6@gmail.com')
        cy.get('#password').type('123Admin@')
        cy.get('form > :nth-child(2) > .btn').click()   
    });
    
    it('store page function',()=> {
        // const fileName = '500.jpeg';
        // cy.fixture(fileName).then(fileContent => {
        //     cy.get(':nth-child(1) > .col-sm-5 > .form-inline > .mr-3 > .custom-file > #inputGroupFile01').upload({ fileContent, fileName, mimeType: 'image/jpeg' });
        //   });

        cy.get(':nth-child(1) > .col-sm-5 > .form-inline > .mr-3 > .custom-file > #inputGroupFile01').click()
    });

});