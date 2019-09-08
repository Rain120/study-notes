<!--
 * @Author: Rain120
 * @Date: 2019-07-11 22:33:37
 * @LastEditTime: 2019-09-08 16:26:10
 -->
<h1 align="center">
<a href="https://rain120.github.io/study-notes">Study Notes Template</a>
</h1>

<div align="center">

  <p align="center">
  <img src="https://img.shields.io/github/license/rain120/study-notes?style=flat-square" alt="github" /> 
  <img src="https://img.shields.io/github/last-commit/rain120/study-notes?style=flat-square" alt="github last commit" /> 
  <img src="https://img.shields.io/badge/docsify--cli-v4.3.0-green?style=flat-square&logo=appveyor" alt="docsify-cli" />
  </p>

</div>

> A note-taking template out of the box, just configure your own github, logo and profile.

<h3 align="center">❓ How to use it to configure your own notes</h3>

#### 📋FIle floder

```shell
$ tree -L 5 .
.
|-- LICENSE
|-- README.md
|-- docs
|   |-- README.md
|   |-- _coverpage.md
|   |-- _navbar.md
|   |-- _sidebar.md
|   |-- chao.png // coverpage img
|   |-- index.html // the notes configure, eg: repo, footer, search, gittalk, etc...
|   |-- logo.png // logo
|   |-- notes // your notes where you write it
|   |   |-- HTML-CSS-Javascript
|   |   |   |-- guide.md
|   |   |   `-- tips
|   |   |       |-- css-tips.md
|   |   |       `-- js-tips.md
|   |   `-- guide.md
|   |-- profile
|   |   `-- profile.md
|   `-- style // don't mind it, just jump it
|       |-- docs.css
|       `-- font
|           |-- iconfont.css
|           |-- iconfont.eot
|           |-- iconfont.svg
|           |-- iconfont.ttf
|           `-- iconfont.woff
|-- package-lock.json
`-- package.json
```

#### [Docsify Configure](./docs/index.html)

- Repository Settings

  Go [docs/index.html](./docs/index.html) scripts for setting the repo param to your github repository.

- Gittalk Comment

  **How to get Gittalk's clientID and clientSecret?**

  1. Register the Github OAuth Application
  1.1 Click [Github OAuth Application](https://github.com/settings/applications/new) to register.
  1.2 Github profile path to **User -> settings ->  Developer settings -> OAuth Apps -> New OAuth Apps** to register

  **Application name**: repo-name or what you want to named
  **Homepage URL**: blog address, yourname.github.io/repo-name
  **Application description**: some description
  **Authorization callback URL**: same as Homepage URL

  2. After register, you can get your Gittalk's clientID and clientSecret.

  3. Copy the Gittalk's clientID and clientSecret, and then go [docs/index.html](./docs/index.html) scripts for setting the gitalk params.

* Goto Documentation

  Just need to modify my repo-name

#### 📙 Coverpage

  path: [_coverpage.md](./docs/_coverpage.md)

  > Configure the homepage full screen cover content

#### 📙 Navbar

  path: [_navbar.md](./docs/_navbar.md)

  > Configure the contents of the upper menu bar

#### 📙 Sidebar

  path: [_sidebar.md](./docs/_sidebar.md)

  > Configure the contents of the side menu bar

#### 🔨 Others Configure

  Please use the [Docsify Documentation](https://docsify.js.org) to configure other content in your document.

#### 🤝 Contributions PR
  We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/Rain120/study-notes/pulls) or as a GitHub [issue](https://github.com/Rain120/study-notes/issues).

#### 👨‍🏭 [About Me](https://rain120.github.io/study-notes/#/profile/profile.md)

  > Front-End development engineer, technology stack: React + Typescript + Mobx, also used Vue + Vuex for a while


#### 📝 License

  [MIT](https://github.com/Rain120/study-notes/blob/note-template/LICENSE)

  Copyright © 2019-present [Rain120](https://github.com/Rain120).
