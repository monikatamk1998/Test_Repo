export class LogoutPage{
    constructor(page){
        this.page = page
        this.menu = page.locator('//button[@id="react-burger-menu-btn"]')
        this.logoutLink = page.locator('//a[text()="Logout"]')
    }
    async logout(){
        await this.menu.click()
        await this.logoutLink.click()
    }
} 