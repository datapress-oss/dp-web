# Contributing

+ [Tennivalók elkezdés előtt](#prestart)
+ [Git](#git)

<a name="prestart"></a>

## Tennivalók elkezdés előtt

### A következő programokat kell telepíteni a project bármilyen módosítása előtt:
+ [Git](https://git-scm.com/) vagy [Git Windows-ra](https://gitforwindows.org/)
+  [GitKraken](https://www.gitkraken.com/git-client) Git GUI kliens
+ [NodeJS](https://nodejs.org/) (LTS verzió)
+ [Visual Studio Code](https://code.visualstudio.com/)
+ VScode pluginok web fejlesztéshez:
    + [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
    + [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
    + [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
    + [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
    + [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
    + [StandardJS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

### Első futtatás

A repository klónozása után telepíteni kell a *package.json* file-ban található dependency-ket: ```npm install```. Ez telepíti a fejlesztő gépére az összes project-hez szükséges node modult.<br><br>

### Project indítása

Mikor el akarunk kezdeni dolgozni a projecten, azt el kell indítanunk, hogy a helyi web szerver és a *gulpfile.js*-ben meghatározott automatizált feladatok, PL: scss fordítása css-be stb... fussanak le minden mentés után és ne kelljen egyesével azokat mindig elvégezni.<br>
Indító parancs: ```npm run start```

<a name="git"></a>

## Git 

A [git workflow:](https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow) **centralizált**, tehát csak egy branch van, a **master** branch és mindenki ide commit-olja a változtatásait a lokális repository-ban, majd azokat feltölti az origin/master-ba.

#### Commit
Ez a repository [Commitizen](https://www.npmjs.com/package/commitizen) friendly, tehát minden commit-ot a ```npx git-cz``` paranccsal kell futtatni.<br><br>
Ahogy a kódban a kommentek, úgy a commit-ok is **angol** nyelven vannak.<br><br>

Commit felépülése commitizen használatakor:

+ type
+ scope: itt nem konkrét file nevek kellenek, hanem PL: frontend, backend, core stb...
+ subject: [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) használata
+ body: *mi* és *miért* elmagyarázása a hogyan helyett
+ breaking changes
+ closed issues
