const{test,expect} = require('@playwright/test')
test('handle datepicker', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#datepicker','11/04/20022')
    await page.waitForTimeout(3000)
})