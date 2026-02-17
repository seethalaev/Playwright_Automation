import { test, expect } from '@playwright/test'
test('Demo login1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
  //  await page.pause()

    await page.locator('[placeholder="Enter your username"]').fill('Seethala')
    await page.locator('[placeholder="Enter your password"]').fill('123')
    await page.waitForSelector('id=log-in', { timeout: 3000 })
    await page.locator('[id="log-in"]').click()

})
test.only('Demo login 2',async({page}) => {
  await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F') 
  await page.pause()
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});
