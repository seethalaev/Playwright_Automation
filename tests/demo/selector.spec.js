import{test,expect} from '@playwright/test'
test('Selector demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
})