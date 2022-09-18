const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  //here we give properties to the Schema. Every post will have these properties, and the type is the value of that property.
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    //Date is a UTC object we can use to figure out when things are posted
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
