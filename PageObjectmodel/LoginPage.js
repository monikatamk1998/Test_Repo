import saucedemo from "../TestData/saucedemo.json"
export class LoginPage{
    constructor(page){
        this.page = page
        this.userName = page.locator('//input[@id="user-name"]')
        this.password = page.locator('//input[@id="password"]')
        this.loginButton = page.getByRole('button',{name:"Login"})
    }
    async login(){
        await this.userName.fill(saucedemo.username)
        await this.password.fill(saucedemo.password)
        await this.loginButton.click()

    }
} 