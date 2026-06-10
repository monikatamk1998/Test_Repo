import {test, expect} from "@playwright/test"
import saucedemo from "../TestData/saucedemo.json"
import { acceptAlert } from "../utils/utils"

test("Login page", async({page})=>{

    //!hard coding
    // await page.goto("https://www.saucedemo.com")

    //testcase:
    // Navigate to "https://www.saucedemo.com")
// Enter username, password and click on login button
// Assert products text visible
// Select sorting dropdown ==> Price Low to High
// click add to cart of first and second product
// assert the count of the cart
// click checkout
// enter first name, last name, postal code
// click continue
// Click on finish
// Assert the Thank you for your order
// logout from the application. 

// await page.goto("https://www.saucedemo.com")
// await page.locator('//input[@id="user-name"]').fill("standard_user")
// await page.locator('//input[@id="password"]').fill("secret_sauce")
// await page.getByRole("button",{name:"Login"}).click()

// page.on("dialog", async(dialog)=>{
//     await dialog.accept()

// })

// await expect(page.locator('//span[text()="Products"]')).toHaveText('Products')
// await page.locator('//select[@class="product_sort_container"]').click()
// await page.locator('//select[@class="product_sort_container"]').selectOption("Price (low to high)")
// await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
// await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
// await page.locator('//a[@class="shopping_cart_link"]').click()
// await expect(page.locator('//div[@class="cart_item"]')).toHaveCount(2)
// await page.locator('//button[@class="btn btn_action btn_medium checkout_button "]').click()
// await page.locator('//input[@id="first-name"]').fill("john")
// await page.locator('//input[@id="last-name"]').fill("smith")
// await page.locator('//input[@id="postal-code"]').fill("571421")
// await page.locator('//input[@id="continue"]').click()
// await page.locator('//button[@id="finish"]').click()
// await expect(page.locator('//h2[text()="Thank you for your order!"]')).toContainText("Thank you")

// await page.locator('//button[@id="react-burger-menu-btn"]').click()
// await page.locator('//a[@id="logout_sidebar_link"]').click()

//!implementing the json
// await page.goto(saucedemo.url)
// await page.locator('//input[@id="user-name"]').fill(saucedemo.username)
// await page.locator('//input[@id="password"]').fill(saucedemo.password)
// await page.getByRole("button",{name:"Login"}).click()

// page.on("dialog", async(dialog)=>{
//     await dialog.accept()

// })

// await expect(page.locator('//span[text()="Products"]')).toHaveText('Products')
// await page.locator('//select[@class="product_sort_container"]').click()
// await page.locator('//select[@class="product_sort_container"]').selectOption("Price (low to high)")
// await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
// await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
// await page.locator('//a[@class="shopping_cart_link"]').click()
// await expect(page.locator('//div[@class="cart_item"]')).toHaveCount(2)
// await page.locator('//button[@class="btn btn_action btn_medium checkout_button "]').click()
// await page.locator('//input[@id="first-name"]').fill(saucedemo.firstname)
// await page.locator('//input[@id="last-name"]').fill(saucedemo.lastname)
// await page.locator('//input[@id="postal-code"]').fill(saucedemo.postalcode)
// await page.locator('//input[@id="continue"]').click()
// await page.locator('//button[@id="finish"]').click()
// await expect(page.locator('//h2[text()="Thank you for your order!"]')).toContainText("Thank you")

// await page.locator('//button[@id="react-burger-menu-btn"]').click()
// await page.locator('//a[@id="logout_sidebar_link"]').click()

//!implementing json and utils
//  await page.goto(saucedemo.url)
//     await page.locator('//input[@id="user-name"]').fill(saucedemo.username)
//     await page.locator('//input[@id="password"]').fill(saucedemo.password)
//     await page.getByRole('button',{name:"Login"}).click()

//     // page.on("dialog",async(dialog)=>{
//     //  await dialog.accept()
//     // })
//     await acceptAlert(page)

//     await expect(page.locator('//span[text()="Products"]')).toHaveText('Products')
//     await page.locator('//select[@class="product_sort_container"]').click()

//     // await page.locator('//select[@class="product_sort_container"]').selectOption('Price (low to high)')
//     await selectDropdown(page,'//select[@class="product_sort_container"]','Price (low to high)')

//     await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
//     await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
//     await page.locator('//a[@class="shopping_cart_link"]').click()
//     await expect(page.locator('//div[@class="cart_item"]')).toHaveCount(2)
//     await page.locator('//button[text()="Checkout"]').click()
//     await page.locator('//input[@id="first-name"]').fill(saucedemo.firstName)
//     await page.locator('//input[@id="last-name"]').fill(saucedemo.lastName)
//     await page.locator('//input[@id="postal-code"]').fill(saucedemo.postalCode)
//     await page.locator('//input[@id="continue"]').click()
//     await page.locator('//button[@id="finish"]').click()
//     await expect(page.locator('//h2[text()="Thank you for your order!"]')).toContainText("Thank you")
//     await page.locator('//button[@id="react-burger-menu-btn"]').click()
//     await page.locator('//a[text()="Logout"]').click()

     // ! implementing json, utils, pom

    const loginpage = new LoginPage(page)
    const productpage = new ProductPage(page)
    const checkoutpage = new CheckoutPage(page)
    const logoutpage = new LogoutPage(page)

    await page.goto(saucedemo.url)
    await loginpage.login()
    await productpage.product1()
    await checkoutpage.checkout()
    await logoutpage.logout()





})
