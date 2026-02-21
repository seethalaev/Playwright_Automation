import test,{page,expect} from '@playwright/test'
test('Assertion demo',async({page}) =>
   {
          await page.goto('https://kitchen.applitools.com/')
        
         //Asserion
         //checkthe unique element is present
        await expect(page.locator('text=The Kitchen')).toHaveCount(1)
       if(await page.$('text=The Kitchen'))
       {
         await page.locator('text=The Kitchen').click()
       }

       //check elemnt is hidden or visible
        await expect (page.locator('text=The Kitchen')).toBeVisible()
        await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
        //check elemnt is enable or disable
        await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
        await expect(page.locator('text=The Kitchen')).toBeEnabled()
        //check text
        await page.pause()
        await expect (page.locator('text=The Kitchen')).toHaveText('The Kitchen')
       // await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')
        //check attribute value
        await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
        await expect (page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
       //check url
        await expect (page).toHaveURL('https://kitchen.applitools.com/')
        await expect(page).toHaveTitle(/.*Kitchen/)
        //visua validation  screenshot
        await expect(page).toHaveScreenshot()


   }
)