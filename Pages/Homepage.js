exports.Homepage = 
class Homepage{
    constructor(page){
    this.page = page;
    this.productLists = '//div[@id="tbodyid"]/div/div/div/h4/a';
    this.addTocartbutton = '//a[normalize-space()="Add to cart"]';
    this.cart ='#cartur'
}
async addProductToCart(productName){
    const productList = await this.page.$$(this.productLists);
    for(const product of productList)
    {
        if(productName= await this.page.$$(this.productLists))
        {
            await product.click()
            break;
        }
    }
    await this.page.on('dialog',async dialog=>{
        if(dialog.message().includes('added'))
        {
            await dialog.accept();
        }
    })
    await this.page.locator(this.addTocartbutton).click();

}
async gotoCart(){
    await this.page.locator(this.cart).click();
}

}