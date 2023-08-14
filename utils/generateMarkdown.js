// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#howtocontribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}  

  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}  
  
  ## How to Contribute
  
  ${data.contribution}  

  ## Tests
  
  ${data.test}

  ## Questions
  <ul>
    <li> <a href="https://github.com/${data.gitUser}">My Github Profile </a></li>
    <li> <a href="mailto:${email}"> My Email </a></li>
  </ul>
  If you have any questions feel free to reach out via email! 
  Include "${data.title}" in the subject line
`;
}

module.exports = generateMarkdown;
