//@ts-check
const{test, expect}=require("@playwright/test")

test("Validate OrangeHRM Website Title", async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page).toHaveTitle(/OrangeHRM/);
await expect(page).toHaveURL(/.*orangehrmlive/);
})


//Running Playwright Tests
/*

1. Running All Test - npx playwright test
2. Running a single test- npx playwright test[name of test]
3. Running a set of test files - npx playwright test[Test1][Test2]
4. Running Files that specific words- npx playwright test[word]
5. Running the test with the title - npx playwright test-g["Test Title"]
6. Running test in headed mode- npx playwright test landing-page.spec.ts-headed
7. Running tests on specific project/browser-npx playwright test landing-page.ts--project=chromium
*/