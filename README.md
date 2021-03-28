# findit

A geo-location based game for exploration

## Links

- [Source](https://github.com/denisecase/findit)
- [App](https://findit-nest.herokuapp.com/)

## Stack

- NestJS
- TypeScript
- Prisma 
- SQLite (development)
- Postgres (production)
- Heroku
- Heroku Postgres
- EJS View Engine

## Security

- [HTTPS redirect](https://www.npmjs.com/package/heroku-ssl-redirect)
- [Helmet (better headers)](https://stackoverflow.com/questions/56116660/how-to-use-helmet-js-from-typescript)
- [Enable CORS -Cross-origin resource sharing (CORS)](https://ru-nestjs-docs.netlify.app/techniques/security)
- [csurf for CSRF/XSRF](https://ru-nestjs-docs.netlify.app/techniques/security)
- [csurf requires Express Session](https://www.npmjs.com/package/express-session)
- [Rate Limits](https://ru-nestjs-docs.netlify.app/techniques/security)

## Audits

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Codacy static analysis](https://www.codacy.com/)
- [Snyk security analysis](https://app.snyk.io/org/denisecase)

## Create from Scratch

1. GitHub new repo, with README, .gitignore (Node), license
2. Clone down to local machine
3. Open PS in repo. 
4. Move to parent folder, mk dir temp. 
5. cd into temp, run nest new findit.[1]
6. Let it run, copy files into my repo, not overwriting this README.
7. Add install/run/test commands (from temp Nest README). 
8. Run locally: 
   - npm install
   - npm run start
   - Open browser to http://localhost:3000/
   - Verify, then stop the app (CTRL-C CTRL-C)
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
    - git commit -m "updates here"
    - git push origin main
14. nest generate resource location - answer prompts:
    - REST API
    - Y (yes, generate)
15. Create favicon (e.g., [Favicon.io](https://favicon.io/))
    - Text / Rounded / Orienta / 45 / #FFF / #F0F / Download (zip)
16. Change default response to Express view
    - npm install --save ejs
    - Create ./public/images - add favicon zip contents 
    - Create ./public/styles - add style.css 
    - Create ./views with footer.ejs, header.ejs, index.ejs
    - src/main.ts - enable Express, folders, view engine
    - src/app.controller.ts - prepare for view response
    - src/app.service.ts - provide view name (index)
17. Heroku needs version in package.json and start script
    - update package.json 
    - add Procfile (web: npm run start:prod)
18. Add Prisma to support SQLite, Postgres, Atlas

## Installation

```Powershell
npm install
```

## After changing data schema

```Powershell
npm run prisma:in
npm run db:push
npm run prisma:generate
npm run seed
```

## Run the app

```Powershell
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```Powershell
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Heroku

```PowerShell
heroku update
heroku logs --app findit-nest --tail
heroku open --app findit-nest
heroku pg:psql postgresql-trapezoidal-45903 --app findit-nest
```

## Prerequisites for Publishing

- [Heroku login](https://id.heroku.com/login)
- Optional: [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

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

```Powershell
heroku logs -n 200 -a findit-nest
```

## References

- [Nest documentatation](https://docs.nestjs.com/)
- [Nest MVC](https://docs.nestjs.com/techniques/mvc)
- [Stackoverflow TortoiseGit wincred - top answer](https://stackoverflow.com/questions/14000173/tortoisegit-save-user-authentication-credentials)
- [Web App 2020 Fall](https://github.com/denisecase/findit)
- [Favicon.io](https://favicon.io/)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- ⭐ [VS Code - SQLite extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
- [Prisma Examples /ts/REST](https://github.com/prisma/prisma-examples)
- [NestJS Prisma Recipe](https://docs.nestjs.com/recipes/prisma)
- [NestJS-Prisma-Starter](https://github.com/fivethree-team/nestjs-prisma-starter)
- [Prisma Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Best practice for instantiating PrismaClient with Next.js](https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices)
- [Location of PrismaClient](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)
- [Nest Prisma CRUD](https://github.com/johannesschobel/nest-prisma-crud)
- [Prisma Seeding](https://www.prisma.io/docs/guides/application-lifecycle/seed-database)
- [Prisma Grading App](https://github.com/2color/real-world-grading-app)
- [Prisma: Single provider](https://github.com/prisma/prisma/issues/3834)
- [PWA](https://github.com/denisecase/js-gui-pwa-fact)
