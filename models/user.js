import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false}
}, {timestamps: true})

const User = models.User || model('User', userSchema, 'User')

export default User