import { test, expect } from '@playwright/test';

test.describe('Home Page - localhost:3000', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Rolnopol');
  });

  test('has Home link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('has Alerts link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Alerts' })).toBeVisible();
  });

  test('has Documentation link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Documentation' })).toBeVisible();
  });

  test('has API Explorer link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'API Explorer' })).toBeVisible();
  });

  test('has Sign In link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
  });

  test('has Contact link in navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('displays welcome section with heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome to Rolnopol' })).toBeVisible();
  });

  test('displays welcome section description', async ({ page }) => {
    await expect(page.getByText('Manage your farms, resources, and transactions')).toBeVisible();
  });

  test('displays statistics section', async ({ page }) => {
    await expect(page.locator('#general-stats')).toBeVisible();
  });

  test('displays Active Users statistic', async ({ page }) => {
    await expect(page.locator('#stat-users')).toBeVisible();
    await expect(page.getByText('Active Users')).toBeVisible();
  });

  test('displays Managed Farms statistic', async ({ page }) => {
    await expect(page.locator('#stat-farms')).toBeVisible();
    await expect(page.getByText('Managed Farms')).toBeVisible();
  });

  test('displays Total Area statistic', async ({ page }) => {
    await expect(page.locator('#stat-area')).toBeVisible();
    await expect(page.getByText('Total Area (ha)')).toBeVisible();
  });

  test('displays Total Staff statistic', async ({ page }) => {
    await expect(page.locator('#stat-staff')).toBeVisible();
    await expect(page.getByText('Total Staff')).toBeVisible();
  });

  test('displays Stock Animals statistic', async ({ page }) => {
    await expect(page.locator('#stat-animals')).toBeVisible();
    await expect(page.getByText('Stock Animals')).toBeVisible();
  });

  test('CTA section is visible for guests', async ({ page }) => {
    await expect(page.locator('#cta-section')).toBeVisible();
  });

  test('Get Started Free CTA button navigates to register', async ({ page }) => {
    const ctaButton = page.locator('#cta-section').getByRole('link', { name: 'Get Started Free' });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/register.html');
  });

  test('Sign In CTA button navigates to login', async ({ page }) => {
    const signInButton = page.locator('#cta-section').getByRole('link', { name: 'Sign In' });
    await expect(signInButton).toBeVisible();
    await expect(signInButton).toHaveAttribute('href', '/login.html');
  });
});