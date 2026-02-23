import {test,expect} from '@playwright/test'
test('Slow motion and video recording demo',async() =>
{
    //lauch browser
    const browser=await chromium.lauch()
    //create new incognito browser context
    const context=await browser.newContext()
     
    
})