const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        message:'What is your project called?',
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
        message:'What liscence would you like to use?',
        name:'license',
        choices:['MIT','None','GNU AGPLv3'],
    }
])
.then((response) => {
    console.log(response);
    fs.writeFile('readME.md',JSON.stringify(response,null,'\t'),(err)=>
    err ? console.log(err) : console.log('Success')
    );
});