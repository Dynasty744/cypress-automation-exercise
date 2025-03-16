// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-plugin-api';

const urlsToSuppress = [
    '**/doubleclick.net/**',
    '**/ad.doubleclick.net/**',
    '**/googleads.g.doubleclick.net/**',
    '**/pagead2.googlesyndication.com/**',
    '**/ep1.adtrafficquality.google/**',
    '**/www.googletagservices.com/**',
    '**/googleads.g.doubleclick.net/**',
    '**/tracenep.admaster.cc/**',
    '**/www.googleadservices.com/**',
    '**/www.googleadservices.com/.well-known/**',
    '**/maps.googleapis.com/**',
    '**/cdn.flashtalking.com/**',
    '**/s0.2mdn.net/**',
    '**/agen-assets.ftstatic.com/**'
  ];

// Suppress logs for fetch and XHR requests
beforeEach(() => {
    urlsToSuppress.forEach((url) => {
        cy.intercept(url, { log: false });
    });
  });
