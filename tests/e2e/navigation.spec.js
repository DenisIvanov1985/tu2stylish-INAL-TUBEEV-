// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/TU2STYLISH|To Do List/);
    await expect(page.locator('nav a[href="/"]').first()).toBeVisible();
  });

  test('navigation menu items are clickable', async ({ page }) => {
    // Check Projects link
    const projectsLink = page.locator('a[href="#projects"], a[href="/projects"]').first();
    await expect(projectsLink).toBeVisible();

    // Check What We Do link
    const servicesLink = page.locator('a[href="#services"]').first();
    await expect(servicesLink).toBeVisible();

    // Check Contact link
    const contactLink = page.locator('a[href="#contact"]').first();
    await expect(contactLink).toBeVisible();
  });

  test('CTA button is visible and clickable', async ({ page }) => {
    const ctaButton = page.locator('text=Request a Consultation').first();
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    // Should scroll to contact section
  });

  test('mobile menu opens and closes', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Find and click burger menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    if (await menuButton.isVisible()) {
      await menuButton.click();

      // Check menu is open - look for mobile menu link
      await expect(page.locator('.fixed a:has-text("Projects")').first()).toBeVisible();

      // Close menu
      const closeButton = page.locator('button[aria-label="Close menu"]');
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    }
  });
});

test.describe('Projects Page Tests', () => {
  test('projects page loads with filters', async ({ page }) => {
    await page.goto('/projects');

    await expect(page.locator('h1:has-text("Projects")')).toBeVisible();
    await expect(page.locator('button:has-text("All")')).toBeVisible();
    await expect(page.locator('button:has-text("Residential")')).toBeVisible();
  });

  test('category filter works', async ({ page }) => {
    await page.goto('/projects');

    // Click on Residential filter
    await page.locator('button:has-text("Residential")').click();

    // Wait for filtering
    await page.waitForTimeout(500);

    // Should show residential projects
    await expect(page.locator('text=Mill Basin Marina')).toBeVisible();
  });

  test('project card links to detail page', async ({ page }) => {
    await page.goto('/projects');

    // Click on first project
    const firstProject = page.locator('article').first();
    await firstProject.click();

    // Should navigate to project detail
    await expect(page).toHaveURL(/\/projects\/.+/);
  });
});

test.describe('Project Detail Page Tests', () => {
  test('project detail page loads correctly', async ({ page }) => {
    await page.goto('/projects/mill-basin-marina');

    await expect(page.locator('h1:has-text("Mill Basin Marina")')).toBeVisible();
    await expect(page.locator('text=New York, USA')).toBeVisible();
  });

  test('back button works', async ({ page }) => {
    await page.goto('/projects/mill-basin-marina');

    const backLink = page.locator('text=Back to Projects');
    await backLink.click();

    await expect(page).toHaveURL('/projects');
  });
});

test.describe('Contact Form Tests', () => {
  test('contact form is visible', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section - wait for it to exist
    const contactSection = page.locator('section#contact');
    await contactSection.waitFor({ state: 'attached' });
    await contactSection.scrollIntoViewIfNeeded();

    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('form validation works', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]:has-text("Submit")');
    await submitButton.click();

    // Form should not submit (required fields)
    await expect(page.locator('text=Thank You')).not.toBeVisible();
  });
});

test.describe('Legal Pages Tests', () => {
  test('privacy page loads', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.locator('h1:has-text("Privacy Policy")')).toBeVisible();
  });

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms');
    await expect(page.locator('h1:has-text("Terms of Use")')).toBeVisible();
  });

  test('accessibility page loads', async ({ page }) => {
    await page.goto('/accessibility');
    await expect(page.locator('h1:has-text("Accessibility Statement")')).toBeVisible();
  });
});

test.describe('Admin Panel Tests', () => {
  test('admin login page loads', async ({ page }) => {
    await page.goto('/admin');
    await expect(page.locator('text=Admin Panel')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('admin login works with correct password', async ({ page }) => {
    await page.goto('/admin');

    await page.fill('input[type="password"]', 'tu2admin');
    await page.click('button[type="submit"]');

    // Should show dashboard
    await expect(page.locator('text=Total Projects')).toBeVisible();
  });

  test('admin login fails with wrong password', async ({ page }) => {
    await page.goto('/admin');

    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Should show error
    await expect(page.locator('text=Invalid password')).toBeVisible();
  });
});
