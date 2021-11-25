
const { Schema,  model, SchemaTypes } = require('mongoose');

const vegetableSchema = new Schema({
    type     : String,
    created  : Date,
    watered: Date,
    harvesrs: Number,
    harvestedAt:Date,
});

const fermaSchema = Schema(
  {
      vegetables: {
      type: [vegetableSchema],
    },
      owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },

  },
  { versionKey: false, timestamps: true },
);
const Ferma = model('user', fermaSchema);

module.exports = Ferma;