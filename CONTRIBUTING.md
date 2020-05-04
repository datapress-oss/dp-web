# Contributing

+ [Tennivalók elkezdés előtt](#prestart)
+ [Build](#build)
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

Mikor el akarunk kezdeni dolgozni a projecten, el kell indítanunk egy dev session-t, amiben a *Parcel* module bundler automatikusan létrehoz egy helyi web server-t, ami tartalmazza a live-reload modult és automatikusan lefordítja az összes .scss és .js file-okat egyetlen önálló file-ba.<br>
Indító parancs: ```npm run dev```

<a name="build"></a>

## Build

**FONTOS:** mielőtt elindítjuk a szervert, át kell írnunk az *Email.js*-ben az Email-hez kapcsolódó belépő adatokat, amik a *Credentials* object-ben találhatóak.
Ahhoz, hogy a project publikálható módba legyen, amit különálló web server-en is lehet majd futtatni, le kell azt build-elnünk. A *Parcel* egy paranccsal minden ehhez szükséges folyamatot elvégez PL.: .scss és .js fordítása, minification. <br>
Eddig az *src* mappában dolgoztunk, viszont a ```npm run publish``` futtatásával egy teljesen kész verziót kapunk az ekkor létrehozott *dist* mappába, amit az Express szerver, ami az 5000-es porton fut, ki szolgál statikus tartalomként.

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
