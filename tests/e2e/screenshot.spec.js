const { test } = require('@playwright/test');

test('take homepage screenshot', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(3000); // Wait for images to load
  await page.screenshot({ path: 'screenshot-homepage.png', fullPage: true });
});

test('take hero screenshot', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot-hero.png' });
});
