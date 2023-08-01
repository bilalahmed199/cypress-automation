<!--  Basic cypress commands
      * npx cypress open = to open cypress with head
      * npx cypress run = to open cypress headless
      * npx cypress run --headed = to open cypress headed through Command Prompt / Terminal
      * npx cypress run --spec cypress\e2e\firstTestCase.cy.js = to open cypress headless with specific file through Command Prompt / Terminal
      * npx cypress run --browser chrome = to open cypress in specif browser headless through Command Prompt / Terminal
      * npx cypress run --browser chrome --headed = to open cypress in specific browser headed through Command Prompt / Terminal
      Example:
      Go to file directory & run below command:
      npx cypress run --browser chrome --spec cypress\e2e\assertions_explicit.cy.js
      npx cypress run --browser chrome --spec cypress\e2e\assertions_explicit.cy.js --headed

      * npm run test = to run all test scripts in the project headless

      * npm run test -- --spec "cypress/e2e/rpm/**/*"  = to run all test scripts in the specific folder headless

 -->

<!--  commands.js File
      * To access cypress commands, add below line in commands.js file
      <reference types = "Cypress" />

      To use XPATH:
      Step 1: install "cypress-xpath" plugin -> npm install -D cypress-xpath

      Step 2: add below lines in 'commands.js' and 'e2e.js' file
      <reference types = "cypress-xpath" />      //commands.js file
      require ('cypress-xpath')     //e2e.js file

      * add login code in command.js file & call it in the required test script

 -->

<!--  package.js File

      * change scripts to below code:
            "scripts": {"test": "cypress run"

     -->

<!--  Mocha reports
      Step 1:
      * npm install mocha --save-dev
      * npm install cypress-multi-reporters --save-dev
      * npm install cypress-mochawesome-reporter --save-dev
      * npm install mochawesome --save-dev
      * npm install mochawesome-merge --save-dev
      * npm install mochawesome-report-generator --save-dev
      Step 2:
      add custom code in 'cypress.config.json' and 'support/e2e.js' file(code added with 'for mocha report' comment)
      Step 3:
      run a file, HTML report will be created in REPORTS folder
     -->
