const faker = require('faker')

describe('multipledata', () => {
    it('get multiple data from faker and store it', () => {
        let name={}
        let data = {}
        for (let i = 0; i < 5; i++) {
            name['user'+i]= faker.name.findName() 
            
            data ={...data,...name}
            cy.log(data)
        }
        var writeData= {"username":data}
        //cy.log(writeData)
        cy.writeFile('cypress/fixtures/newdata.json',writeData)

    });

    it.only('get mulitple address and username', () => {
        let data ={}
        let data1={}
        let usename = {}
        let address = {}

        for (let i = 0; i < 5; i++) {
            usename['name'+i] = faker.name.firstName()
            address['address'+i] = faker.address.city()
            data = {...data,...usename}
            data1 = {...data1,...address}
        }
        var totalData = {"username":data,"address":data1}
        cy.writeFile('cypress/fixtures/newdata.json',totalData)

    });
});