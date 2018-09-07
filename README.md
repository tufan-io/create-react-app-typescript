# react-scripts

This package is a fork from the create-react-app typescript repo.
[Create React App Typescript](https://github.com/wmonk/create-react-app-typescript)

One of the references used to setup the library configuration is:
https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/

It modifies the directory structure of the created app to primarily support the
creation of react component library using typescript. In addition to being able
to publish the library, it supports the notion of creating a sample app that uses
the library to test it.

```js
src/
  app/
    App.css
    App.tsx
    App.test.tsx
    logo.svg
  /lib
    index.tsx
    LibContent.css
    LibContent.tsx
  index.css
  index.tsx
  registerServiceWorkers.ts
```

In order to build the library, you will manually need to make a few changes:
- edit package.json to include the following:
```json
  "main": "lib/main.js"
  "name": "<libraryname>"
  "private": false
```
- build the library
```bash
  npm run build_lib
```
- add a file called main.d.ts under lib/
```ts
  declare module '<libraryname>';
```
note: keep the single quotes and replace the <libraryname> with the name you
entered in package.json 'name'

Continuing with this example, this libray that is created can be installed as
an npm module. You can include the modules from the library as follows:
```ts
  import { LibContent } from '<libraryname>';
```

Remainder of this from the readme of the original package from which this was
forked.

Enjoy!!!

-----------

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
