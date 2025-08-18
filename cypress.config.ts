import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env['CI_BASE_URL'] || 'http://localhost:4200',
    video: false,
    retries: { runMode: 2, openMode: 0 },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
