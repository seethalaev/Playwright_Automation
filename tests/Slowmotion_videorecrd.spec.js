import { test, expect } from '@playwright/test'
test('Slow motion and video recording demo', async () => {
    //lauch browser
    const browser = await chromium.lauch({
        slowMo: 500,
        headless: false
    })
    //create new incognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    })
    //create new page inside context
    const page = await context.newPage()
    await page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    //dispopse context when t is not needed
    await context.close()

})