const fs = require('fs');

function liscenceBadge(license){
    if (license === 'MIT') {

    }
}

function createMarkdown(response){
    return `
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
    `;
}

module.exports = createMarkdown();