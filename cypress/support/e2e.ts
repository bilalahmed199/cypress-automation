// ***********************************************************
// This file is processed and loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// to use xpath
require("cypress-xpath");

//for mocha reports
import "cypress-mochawesome-reporter/register"; 