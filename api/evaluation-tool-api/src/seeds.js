const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'Marloesje2',
  email: 'marloes2@seeds.nl',
  password: 'abc123'
};

const batches = [{
  name: 'first batch',
  students: [{
    studentName: 'Arno',
    evaluations: [{
      date: '01-01-2017',
      color: 'green'
    }, {
      date: '02-01-2017',
      color: 'green'
    }]
  }, {
    studentName: 'Wouter',
    evaluations: [{
      date: '01-01-2017',
      color: 'yellow'
    }]
  }],
},
{name: 'second batch'}
];



const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        batches.map((batch) => {
          feathersClient.service('batches').create(batch)
            .then((result) => {
              console.log('Batch seeded...');
            }).catch((error) => {
              console.error('Error seeding batch!');
            });
        });
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
