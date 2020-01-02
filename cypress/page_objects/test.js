
export class TodoPage {
    navigate(){
        cy.visit('facebook.com')
    }

    addTodo(){
        cy.get('.newTodo').type(todo +"{enter}")
    }
}