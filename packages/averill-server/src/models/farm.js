
const { Schema,  model, SchemaTypes } = require('mongoose');

const vegetableSchema = new Schema({
    type     : String,
    created  : Date,
    watered: Date,
    harvesrs: Number,
    harvestedAt: Date,
    Position:Number,
});

const farmSchema = Schema(
    {

      vegetables: {
      type: [vegetableSchema],
    },
      owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
          name: {
      type: String,
  
    },

  },
  { versionKey: false, timestamps: true },
);
const Farm = model('farm', farmSchema);

module.exports = Farm;

// получить все фермы юзера (названия)
// создать ферму
// получить ферму по айди
