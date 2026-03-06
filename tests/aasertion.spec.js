import test,{page,expect} from '@playwright/test'
test('Assertion demo',async({page}) =>
   {
          await page.goto('https://kitchen.applitools.com/')
        
         //Asserion
         //checkthe unique element is present
        await expect(page.locator('text=The Kitchen')).toHaveCount(1)
       