import test,{page,expect} from '@playwright/test'
test('Assertion demo',async({page}) =>
   {
         await page.goto('https://practicetestautomation.com/practice-test-login/')
         await page.pause()
         //Asserion
         //checkthe element is present
        await expect(page.locator(' name: Username')).toHaveCount(1)

   }

)