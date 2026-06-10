export async function acceptAlert(page){
    page.on("dialog", async(dialog)=>{
    await dialog.accept()
})
}

export async function selectDropdown(page, locator, value){
    await page.locator(locator).selectOption(value)
}
