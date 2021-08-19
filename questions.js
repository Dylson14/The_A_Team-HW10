/* This file will be solely responsible for the prompts and questions */
const questions = [
  /* Team Manager starts here */
  { /* Manager's Name */
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

  { /* Manager's ID */ 
   type: "input",
    name: "employeeID",
    message: "What is your Team Manager's Employee ID?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid number ID";
      }
      return true;
    },
  },

  { /* Manager's email */
    type: "input",
    name: "email",
    message: "What is your Team Manager's email address?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid email address";
      }
      return true;
    },
  },

  {/* Manager's office Num */
    type: "input",
    name: "officeNum",
    message: "What is your Team Manager's office number?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid integer";
      }
      return true;
    },
  },
  /* Team Manager ends here */

  /* Menu starts here  */
  { /* Teammates menu */
    type: "list",
    name: "teamMenu",
    message: "Which additional positions would you like to recruit to your team?",
    choices:["Engineer","Intern"],
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid option";
      }
      return true;
    },
  },

  {
   if(answers.teamMenu === choices[0]){
     console.log("Engineer was chosen");
    }
  }
   
];

/*  */

module.exports = questions;
