# Javascript-Development-ENV
[![Build Status](https://travis-ci.org/DanBonehill/Javascript-Development-ENV.svg?branch=master)](https://travis-ci.org/DanBonehill/Javascript-Development-ENV)

### Outline
Below are all the decisions we have made for this starter kit

##### Editors & configuration
Features to look for in an Editor
* Strong ES2015+ support
    * Autocompletion
    * Parse ES6 imports
    * Report unused imports
    * Automated refactoring
* Framework intelligence
* Built-in terminal

##### Package management
There are many options, however the standard, and best, is NPM

##### Development webserver
Express - can be used in development and production

Options to share work in progress:
* Heroku - push to server
* localtunnel - expose a certain port in your firewall
* ngrok - expose a certain port in your firewall
* now - push static files to server
* Surge - push static files to server

##### Automation
npm scripts

##### Transpiling
Babel

##### Bundling
Webpack

##### Linting
ESlint

##### HTTP

##### Testing & CI
* Framework
  - Mocha
  - Jasmine (assertion library built in)
  - Tape
  - QUnit
  - AVA
  - Jest
  
* Assertion Library
  - Chai
  - Should.js
  - Expect
  
* Helper Libraries
  - JSDOM
  - Cheerio

* Where to run tests
  - Browser - Karma, Testem
  - Headless Browser - PhantomJS
  - In-memory DOM - JSDOM
  
* Where to place tests
  - Centralized
    - Less 'noise' in src folder
    - Deployment confusion
    - Inertia
    
  - Alongside
    - Easy imports
    - Clear visibility
    - Convenient to open
    - No recreating folder structure
    - Easy to move files
    
* When to run tests
  - Unit tests should run when you hit save
  
###### Unit Tests
- Tests a small unit
- Often single function
- Fast
- Run upon save

###### Integration Tests
- Test multiple units
- Often involves clicking and waiting
- Slow
- Often run on demand, or in QA

##### Production Build

##### Automated Deployment
