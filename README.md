# Gulp v4.0.2 - Bootstrap v4.3 - SCSS Project Starter
[![Gulp](https://img.shields.io/badge/Gulp-4.0.2-red.svg)](https://gulpjs.com/docs/en/getting-started/quick-start)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.3-blue.svg)](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

### Customize Bootstrap - Remove Unused Components!
Instant Live Reload on Changes - GulpWatch + Vscode LiveServer
![About Image](https://repository-images.githubusercontent.com/187352291/07d40680-7993-11e9-8e82-7e2aee97ac2d.png)

### Features!
- Browse Live Changes with auto-reload
- Remove Unused Bootstrap Componenets
- Concatinate Multiple Js Files
- Minified Html, CSS, JS
- Scss Work Flow.
- Built-in Media Queries
- Genrates Minified jpg/png & Webp images
- Start Creating @ build/src
- Ready Deploy Files @ build/dist

### Installation
- It requires [Node.js](https://nodejs.org/)
- Open ```/build``` Folder inside Code editor (Ideally Vscode).
- Install the devDependencies and start the Live server of Vscode.
```sh
$ npm install
$ npm run watch
```
> Edit Files of ```/src``` folder, output will be in ```/dist``` folder(same root directory)

- To remove Unused Bootstrap components, open ```build/src/bstscss/bootstrap.scss``` and simply comment out things you donot need. Gulp will take care of building new minified css file at ```build/dist/assets/css``` , As Simple As That!!

### Plugins

Gulp + Bootstrap starter is extended with the following plugins. 

| Plugin | npmjs Links |
| ------ | ------ |
| gulp-csso | [Link](https://www.npmjs.com/package/gulp-csso) |
| gulp-autoprefixer | [Link](https://www.npmjs.com/package/gulp-autoprefixer) |
| gulp-sass | [Link](https://www.npmjs.com/package/gulp-sass) |
| node-sass | [Link](https://www.npmjs.com/package/node-sass) |
| gulp-htmlmin | [Link](https://www.npmjs.com/package/gulp-htmlmin) |
| gulp-concat | [Link](https://www.npmjs.com/package/gulp-concat) |
| gulp-uglify | [Link](https://www.npmjs.com/package/gulp-uglify) |
| gulp-imagemin | [Link](https://www.npmjs.com/package/gulp-imagemin) |
| gulp-webp | [Link](https://www.npmjs.com/package/gulp-webp) |
| gulp-rename | [Link](https://www.npmjs.com/package/gulp-rename) |


### MIT License

Copyright (c) 2019 Krupesh Anadkat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
