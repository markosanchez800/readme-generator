const inquirer = require('inquirer');
//const markdowngen = require('./markdowngen');
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
   markdownSheet = `
   # ${response.title}\n
   ## Description\n
   ${response.description}\n
   ## Installation\n
   ${response.installation}\n
   ## Usage\n
   ${response.usage}\n
   ## Credits\n
   ${response.credits}\n
   ## License\n
   ${response.license}\n
   `
    fs.writeFile('readME.md',markdownSheet,(err)=>
    err ? console.log(err) : console.log('Success')
    );
});