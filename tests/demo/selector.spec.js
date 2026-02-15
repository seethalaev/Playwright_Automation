import{test,expect} from '@playwright/test'
test('Selector demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.pause()

    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Seethal')
    await page.locator('[id="user-name"]').fill('Anila')
    //using css selector
    await page.locator('#login-button').click()
    //using xpath
    await page.locator('xpath=//input[@id="password"]').fill('user')
    await page.locator('//input[@id="password"]').fill('Ravana')
    //using text
    await page.locator('text=LOGIN').click()
})