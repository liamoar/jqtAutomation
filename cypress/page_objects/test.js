
export class TodoPage {
    navigate(){
        cy.visit('facebook.com')
    }

    addTodo(){
        cy.get('.newTodo').type(todo +"{enter}")
        //pritam changes in pritam branch
        
    }
}