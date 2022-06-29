import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test('visual regression', async ({ page }) => {

    // Your actions to manipulate application state

    expect(await page.screenshot()).toMatchSnapshot();
});
