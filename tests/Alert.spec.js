const {test,expect} = require('@playwright/test');
test('Alert with OK',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
})
await page.click('//button[normalize-space()="Alert"]');
page.waitForTimeout(5000);
});

test('confirm',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })
    await page.click('//button[normalize-space()="Confirm Box"]')
    page.waitForTimeout(5000)
    })