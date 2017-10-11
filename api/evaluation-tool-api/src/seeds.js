const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');
// const photo1 = require('./image/35628283-Cartoon-Boy-Face-Expression-Stock-Photo.jpg');

const user = {
  name: 'Marloesje10',
  email: 'marloes10@seeds.nl',
  password: 'abcd1234'
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
    photo: 'https://cdn.pixabay.com/photo/2014/03/25/15/23/lady-296684_640.png',
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
    photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/31/boy-310723_960_720.png',
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
  // .then(() => {
  //   feathersClient.authenticate({
  //     strategy: 'local',
  //     email: user.email,
  //     password: user.password
  //   })
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
// })
// .catch(function(error) {
//   console.error('Error creating user!', error);
// });
