import {expect} from "@playwright/test"
import { acceptAlert } from "../utils/utils"
import { selectDropdown } from "../utils/utils"

export class ProductPage{
    constructor(page){
    this.page = page
        this.product = page.locator('//span[text()="Products"]')
        this.sort = page.locator('//select[@class="product_sort_container"]')
        this.firstItem = page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]')
        this.secondItem = page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]')
        this.cartIcon = page.locator('//a[@class="shopping_cart_link"]')
        this.cartItem = page.locator('//div[@class="cart_item"]')
        this.checkout = page.locator('//button[text()="Checkout"]')
    }
    async product1(){
        await acceptAlert(this.page)
        await expect(this.product).toHaveText('Products')
        await this.sort.click()
        await selectDropdown(this.page,'//select[@class="product_sort_container"]','Price (low to high)')
        await this.firstItem.click()
        await this.secondItem.click()
        await this.cartIcon.click()
        await expect(this.cartItem).toHaveCount(2)
        await this.checkout.click()
    }
}