/*
page.getByAltText()- to locate an element, usually image, by its text alternative.
page.getByPlaceholder()-to locate an input by placeholder.
page.getByRole()to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to Locate a form control by associated label's text.
page.getByTitle() to Locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute(other attributes can be )
*/



const{test, expect}=require('@playwright/test')
test("Build in locators",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
