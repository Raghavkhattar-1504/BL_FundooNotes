import { required } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    phonenumber: {
      type: Number,
      required: false
    },
    password: {
      type: String,
      required: true
      }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
