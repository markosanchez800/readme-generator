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
   
    function liscenceBadge(){
        if (response.license === 'MIT') {
            liscenceImg = 'https://img.shields.io/static/v1?label=Liscence&message=MIT&color=red'
            liscenceExp = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
        } else if (response.license === 'GNU AGPLv3'){
            liscenceImg = 'https://img.shields.io/static/v1?label=Liscence&message=GNUAGPLv3&color=blueviolet'
            liscenceExp = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
        } else if (response.license === 'None'){
            liscenceImg = 'https://img.shields.io/static/v1?label=Liscence&message=None&color=success'
            liscenceExp = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
        }
    }
    liscenceBadge(response.license);
   markdownSheet = `
   ![Image](${liscenceImg})\n
   # ${response.title}\n
   ## Description  📖\n
   ${response.description}\n
   ## Table of Contents\n
   - [Installation](#installation)\n
   - [Usage](#usage)\n
   - [Credits](#credits)\n
   - [License](#license)\n
   <a id="installation"></a>
   ## Installation  💽\n
   ${response.installation}\n
   <a id="usage"></a>
   ## Usage  🚮\n
   ${response.usage}\n
   <a id="credits"></a>
   ## Credits  👨‍👩‍👧‍👦\n
   ${response.credits}\n
   <a id="license"></a>
   ## License  💳\n
   ${response.license}\n
   ${liscenceExp}\n

   `
    fs.writeFile('readME.md',markdownSheet,(err)=>
    err ? console.log(err) : console.log('Success')
    );
});