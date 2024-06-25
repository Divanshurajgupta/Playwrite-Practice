
import{test,expect} from '@playwright/test'
import { contactPage } from '../Pages/contact'
test('contacttest',async({page})=>{
    const contact = new contactPage(page)
    await contact.gotoLoginPage();
    await contact.contact('abc@gmail.com','Rajeev','Hi how r u?');
    
    await page.waitForTimeout(5000)
})