const mongoose = require("mongoose");
const placesSchema = mongoose.Schema({
  type: [
    {
      moutain: {
        type: String,
        required: false
      },

      beach: {
        type: String,
        required: false
      }
    }
  ],
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  placeImage: {
    type: String,
    required: false
  },

  city: {
    type: String,
    required: false
  },

  facilities: {
    wifi: {
      type: String,
      required: false
    },

    parking: {
      type: String,
      required: false
    },

    food: {
      type: String,
      required: false
    },

    smoking: {
      type: String,
      required: false
    }
  }
});

const Places = mongoose.model("places", placesSchema);
module.exports = Places;
