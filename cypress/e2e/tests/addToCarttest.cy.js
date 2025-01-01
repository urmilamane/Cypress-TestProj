import { homePage } from "../../pages/homePage"
const homeObj= new homePage()
import testData from '../../fixtures/testData.json'

describe('test automation', ()=>{
  before(()=>{
    cy.login(testData.login.username, testData.login.password)
  })

  it('Add to Cart flow', ()=>{
    homeObj.searchProduct(testData.product.productName);
    homeObj.addToCart();
    homeObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain',testData.product.productName);
  })
})