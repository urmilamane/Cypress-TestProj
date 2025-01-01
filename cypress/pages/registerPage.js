export class registerPage {

 weblocators= {
    firstname:'#input-firstname',
    lastname:'#input-lastname',
    email:'#input-email',
    telephone:'#input-telephone',
    password:'#input-password',
    passwordConfirm:'#input-confirm',
    policyCheckbox:'input[type="checkbox"]',
    continue:'.btn.btn-primary'

}
openURL(){
cy.visit(Cypress.env('URL1'))
}
enterFirstname(firstName){
cy.get(this.weblocators.firstname).type(firstName)
}
enterLastname(lastName){
cy.get(this.weblocators.lastname).type(lastName)
}
enterTelephone(phone){
cy.get(this.weblocators.telephone).type(phone)
}
enterEmail(email){
cy.get(this.weblocators.email).type(email)
}
enterPassword(password){
cy.get(this.weblocators.password).type(password)
cy.get(this.weblocators.passwordConfirm).type(password)
}

selectCheckbox(){
cy.get(this.weblocators.policyCheckbox).check()
}
clickButton(){
cy.get(this.weblocators.continue).click()
}

}