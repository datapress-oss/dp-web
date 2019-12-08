# Contributing

+ [Tennivalók elkezdés előtt](#prestart)
+ [Git](#git)
+ [Project struktúra](#structure)

<a name="prestart"></a>

## Tennivalók elkezdés előtt

### A következő programokat kell telepíteni a project bármilyen módosítása előtt:
+ [Git](https://git-scm.com/) vagy [Git Windows-ra](https://gitforwindows.org/)
+ [NodeJS](https://nodejs.org/) (LTS verzió)
+ [Yarn node package manager](https://yarnpkg.com/)
+ [Visual Studio Code](https://code.visualstudio.com/)
+ VScode pluginok web fejlesztéshez:
    + [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
    + [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
    + [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
    + [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
    + [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
    + [StandardJS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

### Első futtatás

A repository klónozása után telepíteni kell a *package.json* file-ban található dependency-ket: ```yarn install```. Ez telepíti a fejlesztő gépére az összes project-hez szükséges node modult.<br><br>

### Project indítása

Mikor el akarunk kezdeni dolgozni a projecten, azt el kell indítanunk, hogy a helyi web szerver és a *gulpfile.js*-ben meghatározott automatizált feladatok, PL: scss fordítása css-be stb... fussanak le minden mentés után és ne kelljen egyesével azokat mindig elvégezni.<br>
Indító parancs: ```yarn run start```

<a name="git"></a>

## Git 

A [git workflow:](https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow) **centalizált**, tehát csak egy branch van, a **master** branch és mindenki ide commit-olja a változtatásait a lokális repository-ban, majd azokat feltölti az origin/master-ba.

#### Commit
Ez a repository [Commitizen](https://yarnpkg.com/en/package/commitizen) friendly, tehát minden commit-ot a ```yarn git-cz``` paranccsal kell futtatni.<br><br>
Ahogy a kódban a kommentek, úgy a commit-ok is **angol** nyelven vannak.<br><br>

Commit felépülése commitizen használatakor:

+ type
+ scope: itt nem konkrét file nevek kellenek, hanem PL: frontend, backend, core stb...
+ subject: [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) használata
+ body: *mi* és *miért* elmagyarázása a hogyan helyett
+ breaking changes
+ closed issues


<a name="structure"></a>

## Project struktúra
<pre>
dp-web
│   README.md
│   license.md   
│   yarn.lock
│   package.json
│	gulpfile.js
│   index.html
│   CONTRIBUTING.md
│
│
│   sub-page1/
│───sub-page2
│   │ index.html
│   │ js/
│   │ css/
│
│───assets
│   │   css/
│   │   img/
│   │   js/
│   └───scss
│       │  bundle/
│       │  bundle.scss
│       │  home-page/
│       │  home-page.scss 
│       │  
│       │  sub-page1.scss
│       │  sub-page2.scss
│   
</pre>
