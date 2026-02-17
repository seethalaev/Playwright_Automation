import{test,expect} from '@playwright/test'
test('Demo login1',async({page})=>{
    await page.goto('https://demo.applitools.com/')
    await page.pause()

    await page.locator('[placeholder="Enter your username"]').fill('Seethala')
    await page.locator('[placeholder="Enter your password"]').fill('123')
    await page.locator('[id="log-in"]').click()
   

}
)
 
 