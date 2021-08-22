const internPrompt = [
    {
    type: "input",
    name: "internName",
    message: "What is your Intern's name?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid name";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "internEmail",
    message: "What is your Intern's email?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid email";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "internId",
    message: "What is your Intern's Id?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid Id";
      }
      return true;
    },
        
},

{
    type: "input",
    name: "internGithub",
    message: "What is your intern's school?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a valid school";
      }
      return true;
    },
        
}
]


module.exports = internPrompt;