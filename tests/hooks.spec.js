import { test, expect } from '@playwright/test'

test.describe('All my tests', () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    })


    test('home', async ({ page }) => {

        await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
       

    })
    test('log-out', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await expect(page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    })
})
