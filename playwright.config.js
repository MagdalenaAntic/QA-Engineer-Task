const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  outputDir: "test-results",
  use: {
    baseURL: "https://jira.trungk18.com/project/board",
    browserName: 'chromium',
    headless: false,
    trace: 'on-first-retry'
  },
});
