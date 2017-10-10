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
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: { type: String },
    students: [studentSchema],
  });

  return mongooseClient.model('batches', batches);
};
