import test,{pae,expect} from '@playwright/test')
test('Assertion demo',async({page}) =>
   {
         await page.goto('https://kitchen.applitools.com/')
         await page.pause()
   }

)