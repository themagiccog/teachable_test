# TEACHABLE TAKE-HOME-ASSIGNMENT

- Test suite with two tests: Sign up , Sign In and My awesome course

- Test Set up is as follow
- Create a folder and launch IDE ( VS Code with that folder)
- In the project terminal type : `npm -i init`
- This is to create the package json file
- Follow the subsequent prompts to fill the dependencies
- Install cypress with the command : `npm install cypress –save-dev`
- Cypress test runner can now be opened using: `node_modules/.bin/cypress open`
- Continue the prompts
- Cypress folder should be created
- Under the Cypress folder create a sub folder named : `integration`
- Under the integration folder create a sub folder named: `examples`
- Tests cane be created under the examples folder

## Cypress Runner

Once cypress is setup use the command below to open cypress runner
`./node_modules/.bin/cypress open`

Run all tests
`./node_modules/.bin/cypress run`

## Notes

- Unable to log into the display the awesome course in my account ad there is an error with the subject application
- Navigate to the project folder > cypress.config.js file and update path to spec files ( this is to map the test runner to the test files path):

- Reference: https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn
- This uses Cypress 10

## Tests

- Sign Up: This is test was designed to sign up a new email credential in the Zeachable app
- Sign In: This test is designed to sign into the Zeachable app with already authenticated and verified email credentials
- E2E workflow of My awesome course ( Issue with applications prevents the entire workflow suite during automation)
