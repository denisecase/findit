# findit
A geo-location based game for exploration

## Create from Scratch

1. GitHub, create repo, initialize with README, .gitignore (Node), license
2. Clone down to local machine
3. Open PS in repo. Move up to parent folder and mk dir temp. cd into temp, run nest new findit.[1]
4. Let it run, copy files into my repo, not overwriting this README.
5. Add install/run/test commands (from temp Nest README). Run locally: 
  - npm install
  - npm run start
  - Open browser to http://localhost:3000/
  - Verify, then stop the app (CTRL-C CTRL-C)
6. npm install ejs (see [Nest MVC](https://docs.nestjs.com/techniques/mvc))
7. npm install @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
8. npm install --save-dev @types/sequelize
9. npm install dotenv 
10. nest generate module /core/database
11. Run locally (see above). Verify and stop.
12. If needed, complete git setup. If TortoiseGit:
    - settings / git / remote / 
    - add name and email
    - settings / git / credential
    - config type: local
    - Helper: wincred
    - Click Add New/Save, then Apply
13. git add .
14. git push origin main

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

## References

- [Nest documentatation](https://docs.nestjs.com/)
- [Nest MVC](https://docs.nestjs.com/techniques/mvc)
- [Nest Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
- [Nest Sequelize Postgres](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)
