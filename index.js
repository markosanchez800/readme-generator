const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        question:'What is your project called?',
        name: 'title',
    },
    {
        type:'input',
        message:'Describe your project',
        name:'description',
    },
    {
        type:'input',
        message:'What needs to be done to install your project/app?',
        name:'installation',
    },
    {
        type:'input',
        message:'Instructions and examples for using your project/app',
        name:'usage',
    },
    {
        type:'input',
        message:'Link your collaborators and/or third-party assets that assisted in the creation of this project/app',
        name:'credits',
    },
    {
        type:'list',
        message:''
    }
])