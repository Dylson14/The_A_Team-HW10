/* This file will be solely responsible for the prompts and questions */
module.exports = questions;

const questions = [
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