const {test,expect}= require('@playwright/test')
test('handling tables',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    const table = await page.locator('#productTable')
    //total number of rows and columns
    const columns = await table.locator('thead tr th')
    expect(await columns.count()).toBe(4)
    // console.log('Number of coumns', await columns.count())
    const rows = await table.locator('tbody tr')
    // console.log('Number of coumns', await rows.count())
    
    expect(await rows.count()).toBe(5)

    //2) Select checkbox for project 4
    // rows.filter({
    //     has:page.locator('td'),
    //     hasText:'product4'
    // })
    // await matchedRow.locator('input').check()

    //3 Select multiple products by re-usable function

    // await selectProducts(rows,page,'Product 1')
    // await selectProducts(rows,page,'Product 2')

    //4) print all product details using loop
    const pages = await page.locator('.pagination li a')
    console.log("Number of pages in the Table",await pages.count())
    for (let p=0;p< await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }
    for(let i=0;i<await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td')
        for(let j=0;j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
        
    }
    await page.waitForTimeout(3000)
}


 await page.waitForTimeout(3000)
})

async function selectProducts(rows,page,name)
{
   const matchedRow= rows.filter({
            has:page.locator('td'),
            hasText:name
        })
        await matchedRow.locator('input').check()
}