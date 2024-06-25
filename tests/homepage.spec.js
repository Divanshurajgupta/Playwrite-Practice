const {test, expect}=require('@playwright/test');

test('Home page',async ({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
const pageTitle=page.title();
console.log('Page title is : ',pageTitle);
await expect(page).toHaveTitle('STORE');
const pageURL = page.url();
console.log('Page URL is:',pageURL);
await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
await page.close();
})



// npx playwright test  runs all test on all browsers in headless mode
//npx playwright tets MyTest,spec.js runs specific test file
//npx playwright test MyTest.spec.js --project=chromium--headed
//npx playwright test MYTest.spec.js --project=chromium--headed--debug
