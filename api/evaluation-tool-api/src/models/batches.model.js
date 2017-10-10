// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const { Schema } = mongooseClient;

  const studentSchema = new Schema({
    studentName: { type: String },
  });

  const batches = new Schema({    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: { type: String , default: 'not yet named'},
    students: [studentSchema]
  });

  return mongooseClient.model('batches', batches);
};
