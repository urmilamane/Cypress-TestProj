import { registerPage } from "../../pages/registerPage.js"
import restTestdata from '../../fixtures/restTestdata.json'
const registerObj= new registerPage()
describe('test automation',()=>{

 it('register flow test',()=> {
    registerObj.openURL()
    registerObj.enterFirstname(restTestdata.firstName)
    registerObj.enterLastname(restTestdata.lastName)
    registerObj.enterTelephone(restTestdata.phone)
    registerObj.enterEmail(restTestdata.email)
    registerObj.enterPassword(restTestdata.password)
    registerObj.selectCheckbox()
    registerObj.clickButton()
 })
})

