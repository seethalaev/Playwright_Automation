const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'html',   // ✅ comma added here

 // retries: 1,         // ✅ needed for on-first-retry

  use: {
    trace: 'on-first-retry',
  },
});
