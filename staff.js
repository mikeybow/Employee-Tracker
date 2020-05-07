const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '300582mK!',
    database: 'employees_db'
});

const prompts = () => {
inquirer.prompt([
    {
        type: "list",
        message: "What are you trying to do?",
        choices: ['Department', 'Employee', 'Role', 'Add Employee'],
        name: "field"
    }
]).then(function(response){
    switch(response.field) {
        case 'Department':
            viewDepartments();
            break;
        case 'Employee':
            viewEmployees();
            break;
        case 'Role':
            viewTitle();
        case 'Salary':
            viewSalary();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Add Management':
            addManagement();
            break;
        case 'Add Salary':
            addSalary();
            break;
        };
    })
};

const viewDepartments = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;

        for(let i = 0; i < res.length; i++) {
            console.log(`
    ID: ${res[i].id}
    Department Name: ${res[i].Department_name}`)
        };
        prompts()
    })
};

const viewEmployees = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;

        for(let i = 0; i < res.length; i++) {
            console.log(`
    ID: ${res[i].id}
    Employee Full Name: ${res[i].Name}
    Department: ${res[i].Department_name}
    Role: ${res[i].title}
    Salary: ${res[i].salary}`)
        };
        prompts()
    });
};


const viewTitle = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;

        for(let i = 0; i < res.length; i++) {
            console.log(`
    ID: ${res[i].id}
    Title Name: ${res[i].title}`)
        };
        prompts()
    });
};

const viewSalary = () => {
    connection.query('SELECT salary FROM department', function(err, res) {
        if(err) throw err;

        for(let i = 0; i < res.length; i++) {
            console.log(`
    ID: ${res[i].id}
    Salary: ${res[i].salary}`)
        };
        prompts()
    });
};

const addEmployee = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name?',
                name: 'Name',
            },
            {
                type: 'input',
                message: 'What department?',
                name: 'Department'
            },
            {
                type: 'input',
                message: 'What is the salary?',
                name: 'Salary'
            },
            {
                type: 'input',
                message: 'What is the title?',
                name: 'Title'
            }
            
        ]).then(function(response) {
            let chosenName;
            for(let i = 0; i < res.length; i++) {
                if(response.chosenName == res[i].Name) {
                    chosenName = res[i];
                }
            }

            if(!chosenName) {
                return console.log('Invalid Name');
            }

        });
    };

prompts();