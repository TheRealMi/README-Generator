// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if(license==="Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if(license==="BSD"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if(license==="Creative Commons"){
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if(license==="Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  }
  if(license==="GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if(license==="The Organization for Ethical Source"){
    return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`;
  }
  if(license==="IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if(license==="ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if(license==="Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if(license==="Open Data Commons"){
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
  }
  if(license==="Perl"){
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  }
  if(license==="SIL"){
    return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
  }
  if(license==="The Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  if(license==="WTFPL"){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  if(license==="ZLib"){
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
  if(license==="No License"){
    return ``;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="Apache"){
    return `[License: Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
  if(license==="Boost"){
    return `[License: Boost](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if(license==="BSD"){
    return `[License: BSD](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if(license==="Creative Commons"){
    return `[License: Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if(license==="Eclipse"){
    return `[License: Eclipse](https://opensource.org/licenses/EPL-1.0)`;
  }
  if(license==="GNU"){
    return `[License: GNU](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if(license==="The Organization for Ethical Source"){
    return `[License: The Organization for Ethical Source](https://firstdonoharm.dev)`;
  }
  if(license==="IBM"){
    return `[License: IBM](https://opensource.org/licenses/IPL-1.0)`;
  }
  if(license==="ISC"){
    return `[License: ISC](https://opensource.org/licenses/ISC)`;
  }
  if(license==="MIT"){
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  }
  if(license==="Mozilla"){
    return `[License: Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  }
  if(license==="Open Data Commons"){
    return `[License: Open Data Commons](https://opendatacommons.org/licenses/odbl/)`;
  }
  if(license==="Perl"){
    return `[License: Perl](https://opensource.org/licenses/Artistic-2.0)`;
  }
  if(license==="SIL"){
    return `[License: SIL](https://opensource.org/licenses/OFL-1.1)`;
  }
  if(license==="The Unlicense"){
    return `[License: The Unlicense](http://unlicense.org/)`;
  }
  if(license==="WTFPL"){
    return `[License: WTFPL](http://www.wtfpl.net/about/)`;
  }
  if(license==="ZLib"){
    return `[License: Zlib](https://opensource.org/licenses/Zlib)`;
  }
  if(license==="No License"){
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==="No License"){
    return '';
  }
  else{
    return `This project uses ${license}. Please refer to licencing documentation by clicking this link: ${renderLicenseLink(license)}`
  }
}

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
    <li> <a href="mailto:${data.email}"> My Email </a></li>
  </ul>
  If you have any questions feel free to reach out via email! 
  Include "${data.title}" in the subject line
`;
}

module.exports = generateMarkdown;
