const {test,expect} = require('@playwright/test')
test('handle multipledropdown',async({page})=>{
    //Select multiple options in dropdown 
    await page.goto("https://testautomationpractice.blogspot.com")
    await page.selectOption('#colors',['Blue','red'])
    await page.waitForTimeout(5000)
})