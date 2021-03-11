const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employee = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let employeeFunction = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'Roles',
    message: 'Select role',
    choices: ['Manager', 'Engineer', 'Intern']
  }])

.then(res => {
  let role = res.Roles
  if (role === 'Manager') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write email here:'
      }, {
        type: 'input',
        name: 'officeNumber',
        message: 'Write office number here:'
      }
    ])
    .then(res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let officeNumber = res.officeNumber
      let newManager = new Manager(name, id, email, officeNumber)
      employee.push(newManager)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then(res => {
        if (res.continue === 'Yes') {
          employeeFunction ()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  if (role === 'Engineer') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write Email here:'
      }, {
        type: 'input',
        name: 'github',
        message: 'Write GitHub username here:'
      }
    ])
    .then (res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let github = res.github
      let newEngineer = new Engineer(name, id, email, github)
      employee.push(newEngineer)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then (res => {
        if (res.continue === 'Yes') {
          employeeFunction()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.logg(err))
  }
  if (role === 'Intern') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write name here:'
      }, {
        type: 'input',
        name: 'id',
        message: 'Write ID here:'
      }, {
        type: 'input',
        name: 'email',
        message: 'Write Email here:'
      }, {
        type: 'input',
        name: 'school',
        message: 'Write what school you went to here:'
      }
    ])
    .then(res => {
      let name = res.name
      let id = res.id
      let email = res.email
      let school = res.school
      let newIntern = new Intern(name, id, email, school)
      employee.push(newIntern)
      fs.writeFile(outputPath, render(employee), err => {
        if (err) {console.log(err)}
      })
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you wish to add another employee?',
        choices: ['Yes', 'No']
      }])
      .then(res => {
        if (res.continue === 'Yes') {
          employeeFunction()
        } else {
          console.log('Finish')
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
})
.catch(err => console.log(err))
}

employeeFunction()




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
