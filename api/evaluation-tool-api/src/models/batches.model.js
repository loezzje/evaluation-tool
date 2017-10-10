// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const { Schema } = mongooseClient;

  const evalutationSchema = new Schema({
    date: { type: Date, default: Date.now },
    color: { type: String, default: 'green'},
    remark: { type: String }
  });

  const studentSchema = new Schema({
    studentName: { type: String },
    photo: {type: String },
    evaluations: [evalutationSchema],
  });

  const batches = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: { type: String , default: 'not yet named'},
    students: [studentSchema],
    startsAt: { type: Date, default: Date.now },
    endsAt: { type: Date, default: Date.now },
  });

  return mongooseClient.model('batches', batches);
};
