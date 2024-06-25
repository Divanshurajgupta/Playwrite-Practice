const{test,expect}=require('@playwright/test')
test("Handle dropdowns",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    //Multipleways to select option from the dropdown
    // await page.locator("#country").selectOption({label:'India'});
    // await page.locator("#country").selectOption({value:'uk'});
    // await page.locator("#country").selectOption('India')
    // await page.locator("#country").selectOption({index:1});
    // await page.selectOption('#country','India')//by text

    //Assertion
    //1-> Check number of options in dropdown
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    //2-> check number of options in dropdown
    // const options = await page.$$('#country option')
    // // console.log("Number of Options:",options.length)
    // await expect(options.length).toBe(10)

    //3 Check  presence of element and option in the dropdown

    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy();

    //4 check presence of value in the dropdown - Approch2 - usingloop
    const options = await page.$$("#country option")
    let status = false;

   
    for(const option of options)
    {
        // console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('France'))
        {
            status=true
            break;
        }
    }
    expect(status).toBeTruthy()





    await page.waitForTimeout(5000);
})