import{test,expect} from '@playwright/test'
test('Locators',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    //Click on Login button -  property
    // await page.locator('id=login2').click()
    await page.click('id=login2')
    //provide username -css
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol') ///  await page.type('#loginusername')
    //provide passowrd -css
    await page.fill("input[id='loginpassword']",'test@123')
    //click on login button
    await page.click("//button[normalize-space()='Log in']")

    //Verify Logout Link Presence
    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();
    await page.close()
})


// npx playwright codegen