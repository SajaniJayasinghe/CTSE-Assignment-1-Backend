const Places = require("../models/places.models");

// const NewPlace = async (req, res) => {
//   let newPlace = new Places(req.body);
//   newPlace.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: err
//       });
//     }
//     return res
//       .status(200)
//       .send({
//         places: newPlace
//       })
//       .json({
//         success: "New Place added successfully!!!"
//       });
//   });
// };

const NewPlace = async (req, res) => {
  let newPlace = new Places(req.body);
  newPlace.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    console.log(err.message);
    return res.status(200).json({
      success: "New Blog add Successfully !!",
      place: newPlace
    });
  });
};

const GetPlace = async (req, res) => {
  Places.find().exec((err, places) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json({
      success: true,
      existingplaces: places
    });
  });
};

const GetOnePlace = async (req, res) => {
  let placeID = req.params.placeID;
  Places.findById(placeID, (err, place) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json({
      success: true,
      existingplaces: place
    });
  });
};

const UpdatePlace = (req, res) => {
  Places.findByIdAndUpdate(
    req.params.placeID,
    {
      $set: req.body
    },
    (err) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      return res.status(200).json({
        success: "Updated Successfully"
      });
    }
  );
};

const DeletePlace = (req, res) => {
  Places.findByIdAndRemove(req.params.placeID).exec((err, deleteplaces) => {
    if (err)
      return res.status(400).json({
        message: "Deletion Unsuccessfull",
        err
      });

    return res.json({
      message: "Deletion Successfull",
      deleteplaces
    });
  });
};

module.exports = {
  NewPlace,
  GetPlace,
  GetOnePlace,
  UpdatePlace,
  DeletePlace
};
