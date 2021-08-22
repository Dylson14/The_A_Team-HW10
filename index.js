const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const managerPrompt = require("./Prompts/manager");
const engineerPrompt = require("./Prompts/engineer");
const internPrompt = require("./Prompts/intern");
const menuPrompt = require("./Prompts/menu");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const renderFunc = require("./src/template");

const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "A_team.html");

const teamArr = [];

const Start = () => {
  const createManager = () => {
    inquirer.prompt(managerPrompt).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.employeeID,
        answers.email,
        answers.officeNum
      ); console.log(manager);
      teamArr.push(manager);
      homePage();
    });
  };
  const homePage = () => {
    inquirer.prompt(menuPrompt).then((answers) => {
      if (answers.teamMenu === "Engineer") {
        createEngineer();
      } else if (answers.teamMenu === "Intern") {
        createIntern();
      } else {
        createHTML();
      }
    });
  };
const createEngineer = () => {
  inquirer.prompt(engineerPrompt)
  .then((answers) => {
    const engineer = new Engineer(
      answers.engName,
      answers.engEmail,
      answers.engId,
      answers.engGithub
    );
    teamArr.push(engineer);
    homePage();
  })
}

const createIntern = () => {
  inquirer.prompt(internPrompt)
  .then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internEmail,
      answers.internId,
      answers.internGithub
    );
    teamArr.push(intern);
    homePage();
  })
}

const createHTML = () => {
  fs.writeFileSync(outputPath, renderFunc(teamArr));
}

createManager();

};

Start();
