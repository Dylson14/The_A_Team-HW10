const generateTeam = (teamArr) => {
  const managerHTML = (manager) => {
    return `<div class=" flex  flex-col  md:flex-row justify-center flex-wrap gap-3 mt-10  ">
    <div class="">
  <div class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
  <div class="bg-indigo-500  flex h-20  items-center">
  <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full font-medium">Manager</h1>
  <p class=" text-white bg py-6 px-6 text-lg tracking-wide text-center justify-center font-bold">${manager.name}</p>
  
  
  </div>
    <p class="p-1 text-lg tracking-wide text-center">ID:${manager.id}</p>
    <p class="p-1 px-6 text-lg tracking-wide text-center">Office Number:${manager.officeNum}</p>
                          <!-- <hr > -->
      <div class="flex justify-center px-5 mb-2 text-sm ">
        <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
              Email:${manager.email}
        </button>
        
        </p>
      </div>
  </div>
  </div>`;
  };

  const engineerHTML = (engineer) => {
    return `<div class="">
        <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
           <div class="h-20 bg-green-500 flex items-center ">
             <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full font-medium">Engineer</h1>
             <p class=" text-white bg py-6 px-6 text-lg tracking-wide text-center justify-center font-bold">${engineer.name}</p>
           </div>
           <p class="p-1 text-lg tracking-wide text-center">ID:${engineer.id}</p>
           <p class="p-1 px-6 text-lg tracking-wide text-center">Github:${engineer.github}</p>
                               <!-- <hr > -->
                               <div class="flex justify-center px-5 mb-2 text-sm ">
                                   <button type="button"
                                       class="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                                        Email:${engineer.email}
                                   </button>
                               </div>
        </div>
        </div>`;
  };
  const internHTML = (intern) => {
    return `
    <div class="">
    <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-red-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
       <div class="h-20 bg-red-500 flex items-center ">
         <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full font-medium">Intern</h1>
         <p class=" text-white bg py-6 px-6 text-lg tracking-wide text-center justify-center font-bold">${intern.name}</p>
       </div>
       <p class="p-1 text-lg tracking-wide text-center">ID:${intern.email}</p>
       <p class="p-1 px-6 text-lg tracking-wide text-center">School:${intern.school}</p>
                           <!-- <hr > -->
           <div class="flex justify-center px-5 mb-2 text-sm ">
             <button type="button"class="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                  Email:${intern.id}
               </button>
                           </div>
    </div>
    </div>
   </div>`;
  };

  const HTML = [];

  const allInterns = teamArr.filter(
    (employee) => employee.getRole() === "Intern"
  );
  HTML.push(allInterns.map((intern) => internHTML(intern)).join(""));

  const allEngineers = teamArr.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  HTML.push(allEngineers.map((engineer) => engineerHTML(engineer)).join(""));

  const allManagers = teamArr.filter(
    (employee) => employee.getRole() === "Manager"
  );
  HTML.push(allManagers.map((manager) => managerHTML(manager)));

  return HTML.join("");
};

/* responsible for creating the HTML doc "boiler plate" */
const renderFunc = (teamArr) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        <title>The_A_Team</title>
      </head>
      <body>
      ${generateTeam(teamArr)}
      </body>
      </html>
    `;
};

module.exports = renderFunc;
