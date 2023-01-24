const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  userId: Number,
  profileUrl: String,
});
const eventSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true },
  title: String,
  description: String,
  creatorId: Number,
  members: [String],
});

const Users = mongoose.model("users", userSchema, "users");
const Events = mongoose.model("events", eventSchema, "events");
const mySchemas = { Users: Users, Events: Events };

module.exports = mySchemas;
