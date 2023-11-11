# PetClinic E2E tests

This project contains e2e tests built in Playwright for [PetClinic](https://github.com/spring-projects/spring-petclinic) app.

## How to install and execute tests

**Pre-requisites:** 

- Install node js if not done
- And of-course the [PetClinic](https://github.com/spring-projects/spring-petclinic) app should be running in your local

## Build the project with npm

    npm install

## Command to open Cypress in local headless mode

    npx playwright test

## Run the Test in headed mode

    npx playwright test --ui


## What did this E2E test do
- open the browser
- Go to http://localhost:8080
- Add a new owner by clicking on "Add Owner" button
- Find the newly aded owner by searching through his lastname

## Test Reports
After each execution the test report will be generated 
- /test-results/.../trace.zip

## File structure
- tests/add-and-findOwner.spec.js
        We define our test in this spec file
- test-data/ownerData.json
        Test data file
- pages/AddOwnerPage.js
        Page objects for Add Owner
- pages/FindOwnersPage.js
        Page objects for Find Owner
