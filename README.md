# js-beginner-boilerplate

this is a simple _ready-to-run_ boilerplate for beginners to experiment

## getting started

- clone the project with either
  - using ssh
    `git clone git@github.com:teyfik-on-it/js-beginner-boilerplate.git`
  - using https
    `git clone https://github.com/teyfik-on-it/js-beginner-boilerplate.git`
  - or simply download zip package from
    [js-beginner-boilerplate](https://github.com/teyfik-on-it/js-beginner-boilerplate/archive/refs/heads/master.zip)
- run `npm i` in the project folder _(only for the first time)_
- run `cp .example.env .env`
  - you will be using this `.env` file for any environment variable
  - there is only `NODE_ENV=development` variable defined as default and this
    can be extended with database connection parameters, api keys and so on
  - you can read more about them on
    _[An Introduction to Environment Variables and How to Use Them](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)_
    or any other article :)
- run `npm run dev`

## features

- testing with [jest](https://jestjs.io/)
- developing with [typescript](https://www.typescriptlang.org)
- type-checking _(with [typescript](https://www.typescriptlang.org))_,
  formatting _(with [prettier](https://prettier.io/))_ and linting _(with
  [eslint](https://eslint.org/))_ on pre-commit
- auto compiling during development with the help of
  - [rimraf](https://npmjs.com/package/rimraf) _for cleaning the `dist` folder
    before building_
  - [wait-on](https://www.npmjs.com/package/wait-on) _for waiting the `dist`
    folder to be compiled for the first time_
  - [concurrently](https://www.npmjs.com/package/concurrently) _for running
    typescript and nodemon together_
  - [nodemon](https://nodemon.io) _for auto restarting the application_
  - [typescript](https://www.typescriptlang.org) _for transpiling TypeScript to
    JavaScript_
- [dotenv](https://www.npmjs.com/package/dotenv) support for using environment
  variables in `.env` file
- [source-map-support](https://www.npmjs.com/package/source-map-support) for
  investigating the app on a runtime error
  - _i didn't test this but it should be working just fine ^^_

## contributing

- you can always create issues and/or pull requests :)
