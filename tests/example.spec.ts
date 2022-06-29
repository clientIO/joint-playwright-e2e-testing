import { test, expect } from '@playwright/test';

/* 
    First Test
*/

// test('Visit Page', async ({ page }) => {
//     await page.goto('http://localhost:3000/');
//     const pageTitle = await page.title();
//     expect(pageTitle).toBe('JointJS App');
// });

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

/*
    Primary Heading
*/

test('Primary heading isVisible', async ({ page }) => {
    const heading = page.locator('text=E2E testing with JointJS & Playwright');
    await expect(heading).toBeVisible();
});


/*
    Dynamic attributes
*/

test('User input changes attribute', async ({ page }) => {
    await page.fill('input', 'rect');

    const rectLabel = page.locator('.rect__dynamic-label');
    await expect(rectLabel).toHaveText('rect');
});

/*
    Dragging Elements
*/

test('Drag element to target location', async ({ page }) => {
    const source = page.locator('.source');
    const target = page.locator('.target');
    await source.dragTo(target);

    const sourceBBox = await source.boundingBox();
    const targetBBox = await target.boundingBox();

    // If top-left inner box corner is inside the outer box
    expect(targetBBox.x).toBeLessThan(sourceBBox.x);
    expect(targetBBox.y).toBeLessThan(sourceBBox.y);

    // If bottom-right inner box corner is inside the outer box
    expect(sourceBBox.x + sourceBBox.width).toBeLessThan(targetBBox.x + targetBBox.width);
    expect(sourceBBox.y + sourceBBox.height).toBeLessThan(targetBBox.y + targetBBox.height);
});

/*
    Drag & Drop
*/

// test('Drag and Drop', async ({ page }) => {
//     const source = page.locator('.source');
//     const target = page.locator('.target');
//     await page.dragAndDrop('.source', '.target');

//     const sourceBBox = await source.boundingBox();
//     const targetBBox = await target.boundingBox();

//     // If top-left inner box corner is inside the outer box
//     expect(targetBBox.x).toBeLessThan(sourceBBox.x);
//     expect(targetBBox.y).toBeLessThan(sourceBBox.y);

//     // If bottom-right inner box corner is inside the outer box
//     expect(sourceBBox.x + sourceBBox.width).toBeLessThan(targetBBox.x + targetBBox.width);
//     expect(sourceBBox.y + sourceBBox.height).toBeLessThan(targetBBox.y + targetBBox.height);

// });

/*
    Linking Elements
*/

test('Link Elements', async ({ page }) => {
    const source = page.locator('.port-out');
    const sourceBBox = await source.boundingBox();

    // Element has attribute [magnet=false]
    const target1 = page.locator('.target-magnet-false');
    const target1BBox = await target1.boundingBox();

    // No link should be present in DOM
    const link = page.locator('.joint-type-standard-link');
    await expect(link).toHaveCount(0);

    // Mousemove to center of element
    await page.mouse.move(sourceBBox.x + sourceBBox.width / 2, sourceBBox.y + sourceBBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(target1BBox.x + target1BBox.width / 2, target1BBox.y + target1BBox.height / 2);
    await page.mouse.up();

    // A link still shouldn't exist as target has attribute [magnet="false"]
    await expect(link).toHaveCount(0);

    // Element has attribute [magnet=true]
    const target2 = page.locator('.target-magnet-true');
    const target2BBox = await target2.boundingBox();

    // Mousemove to center of element
    await page.mouse.move(sourceBBox.x + sourceBBox.width / 2, sourceBBox.y + sourceBBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(target2BBox.x + target2BBox.width / 2, target2BBox.y + target2BBox.height / 2);

    // A highlight should now display on the target element to show a connection is possible
    const highlight = page.locator('path.joint-highlight-stroke');
    await expect(highlight).toHaveCount(1);

    await page.mouse.up();

    // A link should now exist as target has attribute [magnet="true"]
    await expect(link).toHaveCount(1);
});



