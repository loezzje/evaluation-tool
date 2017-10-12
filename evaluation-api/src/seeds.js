const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');


const user = {
  name: 'Marloes',
  email: 'marloes@seeds.nl',
  password: 'abc123'
};

const batches = [{
  name: 'first batch',
  startsAt: '01-07-2017',
  endsAt: '01-09-2017',
  students: [{
    studentName: 'Arno',
    photo: 'https://image.freepik.com/vrije-vector/dame-gezicht-cartoon_17-1012082304.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'green'
    }, {
      date: '02-04-2017',
      color: 'yellow'
    }]
  }, {
    studentName: 'Wouter',
    photo: 'http://blog.colourfulrebel.com/files/2017/10/headings_8619_69773.jpeg',
    evaluations: [{
      date: '01-01-2017',
      color: 'green'
    }]
  },
  {
    studentName: 'Irma',
    photo: 'https://image.freepik.com/vrije-vector/dame-gezicht-cartoon_17-1113103835.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'red'
    }, {
      date: '02-01-2017',
      color: 'green'
    }]
  }, {
    studentName: 'Melanie',
    photo: 'https://image.freepik.com/vrije-vector/dame-gezicht-cartoon_17-1113103835.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'red'
    }]
  }],
},
{name: 'second batch',
  startsAt: '01-09-2017',
  endsAt: '01-11-2017',
  students: [{
    studentName: 'Irina',
    photo: 'https://image.freepik.com/vrije-vector/meisje-gezicht-cartoon_17-1012074502.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'yellow'
    }, {
      date: '02-01-2017',
      color: 'green'
    }]
  }, {
    studentName: 'Panda',
    photo: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'red'
    }]
  },
  {
    studentName: 'Martin',
    photo: 'https://image.freepik.com/vrije-vector/dame-gezicht-cartoon_17-1113103835.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'green'
    }, {
      date: '02-01-2017',
      color: 'red'
    }]
  }, {
    studentName: 'Klaas',
    photo: 'https://image.freepik.com/vrije-vector/jongen-gezicht-cartoon_17-1023102053.jpg',
    evaluations: [{
      date: '01-01-2017',
      color: 'green'
    }]
  }],}
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
              console.log('Batch seeded...', result.name);
            }).catch((error) => {
              console.error('Error seeding batch!', error.message);
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
