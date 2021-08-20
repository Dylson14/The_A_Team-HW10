var inquirer = require("inquirer");
var questions = require("./Prompts/questions");

inquirer
  .prompt(questions)
  .then((answers) => {
    /* console.log(answers);
    console.log(answers.teamMenu); */
    /* I want to be able to use this to navigate between the prompts */
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("something went wrong");
    }
  });
