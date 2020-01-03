
export function createNewPromoCode(promoCodeText) {
  const today = Cypress.moment().format('YYYY-MM-DD')
  const tomo = Cypress.moment().add(1, 'days').format('YYYY-MM-DD')
  //!Add new code
  cy.get('#addNew > .fa').click()
    .url()
    .should('contains', '/promo_code')
    .get('.btn-primary').should('be.disabled')
    .get('#name').type(promoCodeText)
    .get('#point').type('40')
    .get('#expire').type('{enter}')

    .get('#validity_date').type(tomo)
    .get('#validity_date').type('{enter}')
  get('.btn-primary').should('be.enabled').click().wait(1000)
    .get(':nth-child(11) > a > .fa').click()
    .wait(3000)

  //parse api
  var options = {
    url: '/system/promo_code/all?page=1',
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  }

  cy.request(options).then((data) => {
    var a = data.body.list[0].code
    cy.log(a)
  })

  //api parese end here //

  cy.get('.header-avatar').click()
    .get('a.dropdown-item').click().wait(1000)
    .url()
    .should('contain', '/system/login')
    .get('.alert').should('contain', 'You have been logged out!')
}


export function GetPromoCode() {
  cy.wait(2000)
  //parse api
  var options = {
    url: '/system/promo_code/all?page=1',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }
  return new Promise((resolve, reject) => {
    cy.request(options).then((data) => {
      var value = data.body.list[0].code
      //  cy.task('checFileExists','cypress/fixtures/api.json')
      cy.writeFile('cypress/fixtures/api.json', { promoCode: value })
      cy.get('.header-avatar').click()
        .get('a.dropdown-item').click().wait(1000)
        .url()
        .should('contain', '/system/login')
        .get('.alert').should('contain', 'You have been logged out!').wait(2000)
      resolve(value);
    });

  });
  // cy.then(()=>{
  //    newcode = this.value
  //   cy.log(newcode) 
  // })
}

export function ScanPromoCode() {
  //cy.UserLogin()
  cy.StoreLogin()
}

