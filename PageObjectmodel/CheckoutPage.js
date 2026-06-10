import saucedemo from "../testData/saucedemo.json"
import {expect} from "@playwright/test"

export class CheckoutPage{
    constructor(page){
        this.page = page
        this.firstName = page.locator('//input[@id="first-name"]')
        this.lastName = page.locator('//input[@id="last-name"]')
        this.postalCode = page.locator('//input[@id="postal-code"]')
        this.continue = page.locator('//input[@id="continue"]')
        this.finish = page.locator('//button[@id="finish"]')
        this.message = page.locator('//h2[text()="Thank you for your order!"]')

    }
    async checkout(){
       await this.firstName.fill(saucedemo.firstName)
       await this.lastName.fill(saucedemo.lastName)
       await this.postalCode.fill(saucedemo.postalCode)
       await this.continue.click()
       await this.finish.click()
       await expect(this.message).toContainText("Thank you")
    }
} 