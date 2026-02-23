import { test, expect } from '@playwright/test'
test('Slow motion and video recording demo', async () => {
    //lauch browser
    const browser = await chromium.lauch({
        slowMo: 500,
        headless: false
    })
    //create new incognito browser context
    const context = await browser.newContext()
    //create new page inside context
    const page = await context.newPage()
    await page.goto("")
    //dispopse context when t is not needed
    await context.close()

})