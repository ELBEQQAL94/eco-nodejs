const mongoose = require("mongoose");
const { v1: uuid } = require("uuid");
const crypto = require("crypto");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 200,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      maxlength: 200,
      required: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 200,
      required: true,
    },
    salt: String,
    about: {
      type: String,
      maxlength: 255,
      trim: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.cryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

UserSchema.methods = {
  authenticated: function (passwordRecieveFromUser) {
    return this.cryptPassword(passwordRecieveFromUser) === this.hashed_password;
  },
  cryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};
module.exports = model("User", UserSchema);
