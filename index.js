var inquirer = require("inquirer");
var questions = require("./questions");

/* const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your Team Manager's name?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid name";
      }
      return true;
    },
  },
];
 */

inquirer.prompt(questions)
  
/*   .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); */
