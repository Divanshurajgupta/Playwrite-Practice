exports.contactPage = class contactPage
{
    constructor(page)
    {
        this.page = page;
        this.contactslink= "//a[normalize-space()='Contact']";
        this.contactemail = "//input[@id='recipient-email']";
        this.contactname ="//input[@id='recipient-name']";
        this.message="//textarea[@id='message-text']";
        this.sendbtn="//button[normalize-space()='Send message']"
        

    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/')
    
    }
    async contact(email,name,message)
    {
        await this.page.locator(this.contactslink).click()
        await this.page.locator(this.contactemail).fill(email)
        await this.page.locator(this.contactname).fill(name)
        await this.page.locator(this.message).fill(message)
        await this.page.locator(this.sendbtn).click()
        
    }

}