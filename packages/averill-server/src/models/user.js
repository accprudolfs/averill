
const { Schema, SchemaTypes, model } = require('mongoose');

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },

    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },

    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true },
);
const User = model('user', userSchema);

module.exports = User;