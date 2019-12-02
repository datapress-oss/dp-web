# Developer Guide

## Things you should install first:

+ ### **[Git](https://git-scm.com/)** or **[Git for windows](https://gitforwindows.org/)**
+ ### **[NodeJS](https://nodejs.org/en/)**
+ ### Node package manager: **[yarn](https://yarnpkg.com/)**

---

 Execute this **FIRST** in your shell after downloading the repository where *package.json* is located: <br><br>
  ```yarn install```
<br><br>
This will  install all the needed dependencies.
-
<br>

# Running the project and developing

Before you start developing the project in your code editor first you need to run: <br><br>```yarn run start``` <br><br>
This command will run *gulpfile.js* which automates common tasks like:<br>
---
+ Creating the web server and serving the project on it
+ Compilation of scss files into css and moving them to a separate css directory.
+ Minifications of js and css
+ Reloads the browser instantly when a file is changed

<br>

# Commits
This repository is [commitizen](https://yarnpkg.com/en/package/commitizen) friendly. This means you need to run the following command when you want to commit your changes: <br><br> ```yarn git-cz```
---