# crowe-api

[🇧🇷 - Português brasileiro](./README.md)

Crowe's challenge to applicants. API.

Crowe is starting a new selection process and requested the Technology sector to create a form to register the candidates that will participate in this selection process.

This repo stores the project's back-end. Download and install the [crowe-web](https://github.com/samuel-s-marques/crowe-web) project to use the front-end.

<!--ts-->
- [crowe-api](#crowe-api)
	- [Features](#features)
	- [Technologies](#technologies)
	- [TODO](#todo)
	- [API](#api)
	- [How to use](#how-to-use)
		- [Requirements](#requirements)
		- [Running the front-end (client)](#running-the-front-end-client)
		- [Running the back-end (server)](#running-the-back-end-server)
	- [Insomnia](#insomnia)
	- [License](#license)
<!--te-->

## Features
- [ ] Registration of applicants
- [ ] Listing of Applicants
- [ ] Applicant deletion
- [ ] Editing applicants

## Technologies
- [ ] [AdonisJS](https://adonisjs.com/)
- [ ] [Typescript](https://www.typescriptlang.org/)
- [ ] [SQLite3](https://www.sqlite.org/index.html)

## TODO
- [x] Registration
- [x] Listing
- [x] Deletion
- [x] Visualization
- [x] Editing
- [x] Pagination

## API
| Método | Rota | Handler | Descrição |
|--------|------|---------:|:-----------|
|  HEAD, GET  | /applicants | ApplicantsController.index | Lists all applicants |
|  POST  | /applicants/new | ApplicantsController.store | Create a new applicant |
|  HEAD, GET | /applicants/:id | ApplicantsController.show | List an applicant based on its id |
|  PUT  | /applicants/:id | ApplicantsController.update | Updates an applicant based on its id |
|  DELETE  | /applicants/:id | ApplicantsController.destroy | Deletes an applicant based on its id |


## How to use
We can consider this project divided into two parts:
1. Front-end ([crowe-web](https://github.com/samuel-s-marques/crowe-web))
2. Back-end (this repo)

The front-end needs the back-end to be running in order to work.

### Requirements
Before beginning, you'll need to have installed in your machine [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/).

### Running the front-end (client)
Download this repo (you will need to extract the files), clicking [here](https://github.com/samuel-s-marques/crowe-web/archive/refs/heads/master.zip) or cloning it in your terminal/cmd:

```bash
$ git clone https://github.com/samuel-s-marques/crowe-web
```

Access the project's folder in your cmd/terminal
```bash
$ cd crowe-web
```

Install the dependencies using **npm install**
```bash
$ npm install
```

Execute the app in development mode
```bash
$ npm run serve
```

The client will start on port :8080 - access [http://localhost:8080](http://localhost:8080).

-----

### Running the back-end (server)

Download the back-end's repo (you will need to extract the files), clicking [here](https://github.com/samuel-s-marques/crowe-api/archive/refs/heads/master.zip) or cloning it in your terminal/cmd:

```bash
$ git clone https://github.com/samuel-s-marques/crowe-api
```

Access the project's folder in your cmd/terminal
```bash
$ cd crowe-api
```

Install the dependencies using **npm install**
```bash
$ npm install
```

Define the settings in the .env.example file. To get the value of the APP_KEY key, you will have to generate it through
```bash
$ node ace generate:key
```

After generating it, copy the 

After generating, copy the given value and paste it into the APP_KEY key of the .env.example.
```cl
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=**paste here!**
DB_CONNECTION=sqlite
```
And then remove the .example suffix from the file.

Run the application in development mode
```bash
$ npm run dev
```

The server will start on port :3333.

## Insomnia
If you want to test the API, you can speed up the process with [Insomnia](https://insomnia.rest/).

<p align="center">
  <img src="Insomnia_screenshot.png" alt="Insomnia screenshot">
  <a href="Insomnia_API.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## License
This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.