const engineerPrompt = [
    {
    type: "input",
    name: "engName",
    message: "What is your Engineer's name?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid name";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "engEmail",
    message: "What is your Engineer's email?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid email";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "engId",
    message: "What is your Engineer's Id?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid Id";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "engGithub",
    message: "What is your Engineer's Github username?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid Github username";
      }
      return true;
    },
        
}
]


module.exports = engineerPrompt;