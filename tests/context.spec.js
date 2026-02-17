import { test, expect } from '@playwright/test';

test('has title', async ({ page ,context}) => {

  await context.tracing .start({snapshots:true,screenshots:true}) 
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});