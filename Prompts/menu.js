const menuPrompt = [{ 
    type: "list",
    name: "teamMenu",
    message: "Which additional positions would you like to recruit to your team?",
    choices:["Engineer","Intern","End App."],
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid option";
      }
      return true;
    },
  },];

  module.exports = menuPrompt;
