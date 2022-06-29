// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // use: {
    //     trace: 'on',
    // },
    // reporter: 'html',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        // "iPhone 13 Pro" tests use WebKit browser.
        {
            name: 'iPhone 13 Pro',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 13 Pro'],
            },
        },
        // "Pixel 4 landscape" tests use Chromium browser.
        {
            name: 'Pixel 4 landscape',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 4 landscape'],
            },
        },
    ],
};

export default config;
