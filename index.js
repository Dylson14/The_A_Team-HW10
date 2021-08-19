var inquirer = require("inquirer");
var questions = require("./questions");


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
