import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    console.warn("Warning!: Could not load the envs. Using system defined env vars");
}

export default defineConfig({
    // Add global setup and teardown here:

    fullyParallel: false,
    workers: process.env.WORKERS ?? 1,
    reporter: 'html',
    use: {
        headless: false,
        baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:3000',
        extraHTTPHeaders: {
            'Content-Type': 'application/json'
        },
        trace: 'on-first-retry',
        actionTimeout: 10000,
        navigationTimeout: 10000,
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'API Tests',
            testDir: './tests',
            use: {
                ...devices['Desktop Chrome']
            },
        },
    ],
});
