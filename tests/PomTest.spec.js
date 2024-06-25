import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/Logingpage';
import { Homepage } from '../Pages/Homepage';
import { cartpage } from '../Pages/cartpage';
    
test('testlogin',async({page})=>{
    
    // //Login
    const login = new LoginPage(page)
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(5000);
    //Home
    const home = new Homepage(page)
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();
    //cart
    const cart = new cartpage(page)
    await page.waitForTimeout(3000)
    await cart.checkProductInCart('Nexux 6')
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true)

})
