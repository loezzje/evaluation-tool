# evaluation-tool

Practise full stack javascript/React/Feathers API - work in progress

The goal of the app is to be able to evaluate students assigned to a class (batch). Based on their latest evaluation, the app will be able to generate a student to ask a question to semi-randomly. 

The practise goal is to put an algorythm into syntax and use it in a full stack app.


### Issues that still need work:
 
* Fix authorization
* Edit, create and delete students
* Move algorythm to backend, or make it part of an onClick event vs page loading

### Running locally

Make sure to have [Node JS](https://nodejs.org/en/download/), [React](https://facebook.github.io/react-native/docs/getting-started.html), [MongoDB](https://docs.mongodb.com/master/) and [Feathers CLI](https://www.npmjs.com/package/feathers), optional: [Yarn install](https://yarnpkg.com/en/docs/install) to install NPM dependencies faster

```bash
git clone git@github.com:loezzje/evaluation-tool.git
cd api/evaluation-tool-api
npm install
npm start
```
In a second terminal:

```bash
npm run seed (yarn run seed)

cd ../client/evaluation-tool
npm install
npm start
```
