const mongoose = require("mongoose");
const PlaceSchema = mongoose.Schema({
  type: {
    type: String,
    required: false
  }, //beach, mountain, waterfalls

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  picture: {
    type: String,
    required: false
  },

  city: {
    type: String,
    required: false
  },

  facilities: {
    type: Array,
    required: false
  }

  // wifi: {
  //   type: Boolean,
  //   required: false
  // },

  // parking: {
  //   type: Boolean,
  //   required: false
  // },

  // food: {
  //   type: Boolean,
  //   required: false
  // },

  // no_smoking: {
  //   type: Boolean,
  //   required: false
  // }
});

module.exports = mongoose.model("Places", PlaceSchema);
