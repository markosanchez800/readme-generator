
   [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

   # Work Day Scheduler

   ## Description  📖

   This project was designed to track your daily activities and remind you of when to do them. By using moment.js the page tracks the day of the week as well as the current hour to color code the time blocks. Any activity entered is saved using local storage so that even on refresh your daily planner remains the same.

   ## Table of Contents

   - [Installation](#installation)

   - [Usage](#usage)

   - [Author Links](#authorlinks)

   - [Contributions](#credits)

   - [License](#license)

   <a id="installation"></a>
   ## Installation  💽

   ```

   npm i moment

   ```

   <a id="usage"></a>
   ## Usage  🚮

   Enter your necessary tasks in the given time slots throughout the work day.  Pressing the save button on the sidebar allows you to keep these items in local storage so your schedule is not lost throughout the day.  As time passes by the colors on the time blocks will change as well according to when that event is/was (green for coming, red for current, and grey for past)

   <a id="tests"></a>
   ## Tests  📝

   ```

   function timeColorCode(currentHour){  if (currentHour > 9){  nineAM.setAttribute("class","col-sm-8 past");}   to confirm colors are changing

   ```

   <a id="credits"></a>
   ## Contributions  👨‍👩‍👧‍👦

   No Collaborators on this Project

   <a id="authorlinks"></a>
   ## Author Links / Questions 📟

   [GitHub](https://github.com/markosanchez800)

   [LinkedIn](https://www.linkedin.com/in/marko-sanchez-800/)

   [Email](mailto:markosanchez800@gmail.com)

   <a id="license"></a>
   ## License  💳

   Unlicense

   A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.


   