var inquirer = require("inquirer");
var questions = require("./questions");

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    console.log(answers.teamMenu);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("something went wrong");
    }
  });
