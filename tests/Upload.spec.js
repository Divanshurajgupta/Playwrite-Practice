const {test,expect} = require('@playwright/test')
test('Upload singl File without input type', async ({page})=>{
    await page.goto('https://easyupload.io/')
    const filechooserPromose=page.waitForEvent('filechooser')
    await page.locator("//button[@class='dz-button']").click()
    const filechooser=await filechooserPromose
    await filechooser.setFiles('C:/Users/Admin/OneDrive/Pictures/Screenshots/Test.png')

    await page.waitForTimeout(10000)
    

})



