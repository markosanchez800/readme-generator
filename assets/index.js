const inquirer = require('inquirer');
const fs = require('fs');
mdMaker = "```";

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
        message:'Links to your collaborators and/or third-party assets that assisted in the creation of this project/app (use []() syntax for links as necessary)',
        name:'credits',
    },
    {
        type:'input',
        message:'Github username?',
        name:'gitname',
    },
    {
        type:'input',
        message:'LinkedIn username? (word breaks separated by - symbol)',
        name:'linkedname',
    },
    {
        type:'input',
        message:'Email?',
        name:'email',
    },
    {
        type:'input',
        message:'What tests should be run on your application and how?',
        name:'tests',
    },
    {
        type:'list',
        message:'What liscence would you like to use?',
        name:'license',
        choices:['MIT','Unlicense','GNU AGPLv3','Mozilla Public License 2.0'],
    }
])

.then((response) => {
   
    console.log(response);
   
    function liscenceBadge(){
        if (response.license === 'MIT') {
            liscenceImg = '[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)'
            liscenceExp = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
        } else if (response.license === 'GNU AGPLv3'){
            liscenceImg = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blueviolet.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            liscenceExp = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
        } else if (response.license === 'Unlicense'){
            liscenceImg = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            liscenceExp = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
        } else if (response.license === 'Mozilla Public License 2.0'){
            liscenceImg = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            liscenceExp = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
        }
    }
   
    liscenceBadge(response.license);

   
  
    markdownSheet = `
   ${liscenceImg}\n
   # ${response.title}\n
   ## Description  📖\n
   ${response.description}\n
   ## Table of Contents\n
   - [Installation](#installation)\n
   - [Usage](#usage)\n
   - [Tests](#tests)\n
   - [Author Links](#authorlinks)\n
   - [Contributions](#credits)\n
   - [License](#license)\n
   <a id="installation"></a>
   ## Installation  💽\n
   ${mdMaker}\n
   ${response.installation}\n
   ${mdMaker}\n
   <a id="usage"></a>
   ## Usage  🚮\n
   ${response.usage}\n
   <a id="tests"></a>
   ## Tests  📝\n
   ${mdMaker}\n
   ${response.tests}\n
   ${mdMaker}\n
   <a id="credits"></a>
   ## Contributions  👨‍👩‍👧‍👦\n
   ${response.credits}\n
   <a id="authorlinks"></a>
   ## Author Links / Questions 📟\n
   [GitHub](https://github.com/${response.gitname})\n
   [LinkedIn](https://www.linkedin.com/in/${response.linkedname}/)\n
   [Email](mailto:${response.email})\n
   <a id="license"></a>
   ## License  💳\n
   ${response.license}\n
   ${liscenceExp}\n

   `
    fs.writeFile('readME.md',markdownSheet,(err)=>
    err ? console.log(err) : console.log('Success')
    );
});