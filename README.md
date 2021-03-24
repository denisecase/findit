# findit
A geo-location based game for exploration

## Create from Scratch

1. GitHub, create repo, initialize with README, .gitignore (Node), license
2. Clone down to local machine
3. Open PS in repo. Move up to parent folder and mk dir temp. cd into temp, run nest new findit.[1]
4. Let it run, copy files into my repo, not overwriting this README.
5. Add install/run/test commands (from temp Nest README). 
6. Run locally: 
    - npm install
    - npm run start
    - Open browser to http://localhost:3000/
    - Verify, then stop the app (CTRL-C CTRL-C)
7. npm install --save @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
8. npm install --save-dev @types/sequelize
9. npm install --save dotenv 
10. Run locally (see above).
11. Verify and stop.
12. If needed, complete git setup. If TortoiseGit:
    - settings / git / remote / 
    - add name and email
    - settings / git / credential
    - config type: local
    - Helper: wincred
    - Click Add New/Save, then Apply
13. Git add / commit / push new content:
    - git add .
    - git commit -m "install ejs, sequelize"
    - git push origin main
14. nest generate resource location - answer prompts:
    - REST API
    - Y (yes, generate)
15. Create favicon (e.g., [Favicon.io](https://favicon.io/))
    - Text / Rounded / Orienta / 45 / #FFF / #F0F / Download (zip)
16. Change default response to Express view
    - npm install --save ejs
    - Create ./public/images - add favicon zip contents 
    - Create ./public/styles - add style.css to get fixed header/footer
    - Create ./views with footer.ejs, header.ejs, index.ejs
    - src/main.ts - enable Express, folders, view engine
    - src/app.controller.ts - prepare for view response
    - src/app.service.ts - provide view name (index)
17. Change hard-coded PORT to .env
    - we installed dotenv with Sequelize above (npm i --save dotenv)
    - src/app.module.ts - add config
18. Heroku needs version in package.json and start script
    - update package.json 
    - add Procfile (web: npm run start:prod)
19. Add client-side modules using temporary locations
20. Server-side locations
    - Verify npm install sequelize dependencies and dev-deps (above)
    - npm install --save @nestjs/config
    - npm install --save-dev sqlite3
    - Review docs on [Nest sequelize integration](https://docs.nestjs.com/techniques/database#sequelize-integration)
    - app.module.ts - add sequelize module and configure
    - app.service.ts - add sequelize
    - location/location.model.ts - create this file with your resource properties
    - location/location.module.ts - add SequelizeModule, Location, imports, exports
    - location/location.service.ts - add InjectModel, Location, constructor, finish functions
    - location/entities/location.entity.ts - complete the code
21. Seed data
    - npm install --save nestjs-sequelize-seeder
    - app.module.ts - add SeederModule
    - location/location.seeder.ts - create file, add sample data
    - location/location.module.ts - add the seeder

## Installation

```bash
$ npm install
```

## Run the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Prerequisites for Publishing

- [Heroku login](https://id.heroku.com/login)
- [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- Optional: [PostgreSQL local install](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Create Heroku app with Heroku Postgres (Hobby Dev - free) add-on.

- Heroku / Apps / New / Create new app / set name / create
- Deploy method / GithHub / set to your repo / connect
- Automatic deploys / click "Enable Automatic Deploys"
- Heroku / This-Heroku-app / Overview / Configure addons / Find more addons / Heroku Postgres / Install Heroku Postgres / Hobby Dev-Free / findit-nest (use your app name) / Submit order form
- Heroku / This-Heroku-app / Settings / Reveal config vars (verify  DATABASE_URL exists)
- Heroku / This-Heroku-app / Deploy / Manual deploy / "Deploy Branch"
- Heroku / This-Heroku-app / Overview / watch latest activity / View build progress (watch for any issues)
- Heroku / This-Heroku-app / Open app 
- Errors? Heroku / This-Heroku-app / More / View logs

## References

- [Nest documentatation](https://docs.nestjs.com/)
- [Nest MVC](https://docs.nestjs.com/techniques/mvc)
- [Nest Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
- [Nest Sequelize Postgres](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)
- [Stackoverflow TortoiseGit wincred - top answer](https://stackoverflow.com/questions/14000173/tortoisegit-save-user-authentication-credentials)
- [Web App 2020 Fall](https://github.com/denisecase/findit)
- [Favicon.io](https://favicon.io/)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
