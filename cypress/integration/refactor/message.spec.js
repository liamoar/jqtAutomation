import * as sendMessageObj from '../../page_objects/sendMessaageObj'

describe('Message Notification', function(){
    before(function(){
        cy.CMSLogin()
        var user = 'normaluser1@mailinator.com'
        var message ='This is automated message'
        cy.writeFile('cypress/fixtures/user.json',{User : user, Message : message})
    })

    beforeEach(function(){
        cy.fixture('user.json').as('user')
    })
     
    it('Send Message', function(){
        var user = this.user.User
        var message = this.user.Message
        sendMessageObj.selectUser(user)
        var i;
        for(i=1; i<=5; i++){
            sendMessageObj.sendMessage(i, message)
        }  
    })

    it('Check notification', function(){
        var user = this.user.User
        cy.log(user)
        sendMessageObj.checkNotification(user)
        sendMessageObj.logout()
    })

});