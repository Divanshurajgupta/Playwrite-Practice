const {test,expect}=require('@playwright/test');
test('LocateMultipleElemts',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

//    const links =  await page.$$('a');
//    for(const link of links)
//    {
//     const linktext = await link.textContent();
//     console.log(linktext)
//    }

const products = await page.$$("//div[@id='tbodyid']//h4/a")
for(const product of products)
{
    const prodName = await product.textContent();
    console.log(prodName)
}
})


//Locate multipleElements -> const elements = await page.$$(locator)