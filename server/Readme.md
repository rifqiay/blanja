<div align="center">
<h2 align="center">Peworld<br>RESTful API with Express.js</h2>
 </div>

<br />

[![Node.js](https://img.shields.io/badge/Node.js-v.16.14.0-green.svg?style=flat-square&logo=appveyor)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-4.17.3-orange.svg?style=flat-square&logo=appveyor)](https://expressjs.com/en/starter/installing.html) [![PostgreSQL](https://img.shields.io/badge/postgresql-v14.2-blue?style=flat-square&logo=appveyor)](https://www.postgresql.org/) [![cors](https://img.shields.io/badge/cors-v2.8.5-success?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/cors) [![dotenv](https://img.shields.io/badge/dotenv-v16.0.0-blueviolet?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/dotenv) [![pg](https://img.shields.io/badge/pg-v8.7.3-success?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/pg)

## Requirements

1. [Node Js](https://nodejs.org/en/download/)
2. [Express JS](https://expressjs.com/en/starter/installing.html)
3. Web Server (ex. localhost)
4. Code Editor (VS Code, Sublime, Atom, etc)

## Getting Started

<img src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png" width="200"/>

### Node.js

Node.js is a software that designed to develop web-based applications and is written in the syntax of the JavaScript programming language. JavaScript as a programming language that runs on the client / browser side only can be completed by Node.js. With Node.js, JavaScript can also act as a programming language that runs on the server side, such as PHP, Ruby, Perl, and so on.

Node.js can run on Windows, Mac OS X and Linux operating systems without the need for program code changes. Node.js has its own HTTP server library that make it possible to run a web server without using a web server program such as Apache or Nginx.

<img src="https://expressjs.com/images/express-facebook-share.png" width="250"/>

### Express.js

Express.js is one of the most popular web frameworks for Node.js. The complete documentation and its use which is quite easy, can make us develop various products such as web applications or RESTful API.

## Installation

1. Clone or download this repository
2. Open app's directory in CMD or Terminal.
3. Type in Terminal `npm install` to install the required packages.
4. Make a new file, **.env** and setup the file. [instruction here](#setup-env-file)
5. Turn on Web Server and PostgreSQL, (Also can be done with third-party tools like XAMPP, WAMP, etc)
6. Setup the database. [instruction here](#setup-database)
7. Open **Postman** desktop application or Chrome web extension (Install **Postman** if you haven't yet)
8. Choose HTTP Method and enter the request URL.(i.e. localhost:5000/recipe)
9. Check all **Endpoints** [here](#endpoints)

## Setup .env file

Open **.env** file on code editor and copy the code below :

```
# DB_USERNAME = postgres
# DB_HOST = localhost
# DB_DATABASE = DB_NAME
# DB_PASSWORD = DB_PASSWORD
# DB_PORT = 5432
# PORT = 8080
# SECRETE_KEY_JWT = secret_key
```

## Related Project

:rocket: [`Demo blanja`](https://fe-blanja.vercel.app)

## Contact

Muhammad Rifqi Ainul Yaqin - [linkedin](www.linkedin.com/in/rifqiay) - mrifqiay@gmail.com
