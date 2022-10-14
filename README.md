# FindSumTuples
------------
## Souce code

The source code which contains the main function is under the root project on `findAllSumTuples.ts`

## How to run the project

### Project setup

- First things first, you first need to clone this repository before executing it:

  - 1. On a terminal, use the command `git clone https://github.com/MateoLeon44/FindSumTuples.git`
  - 2. Open the newly created project on the editor of choice
  - 3. Open a terminal once you are in the root of the folder project
  - 4. Use `npm install` to create the dependencies needed for the project. If you don't have NPM nor node, you can download it here: `https://nodejs.org/es/`. This project uses Node version `v16.16.0`, if you can't run the project on your current Node version, I strongly recommend you to switch to this version.

### Running the tests

- This project uses Jest as a test framework, which is already installed once you complete the Project setup above this section.
- To run the tests follow the next instructions:

  - 1. Once in the root project open a terminal
  - 2. run `npm run test`

### Running custom tests

- This project enables custom tests by writing arguments in `__tests__/customTests.txt`
- For creating a new custom test do as it follows:

  - 1. Go to `__tests__/customTests.txt`. Note: The `txt` already has two custom tests, you can either modify them or extend them
  - 2. The custom test receive two arguments, an array (that given the preconditions, only receives an integer number array without duplicates) and a target number
  - 3. Write your custom test in the next line (for example in the first case, you should write your sample test in the line `3`)
