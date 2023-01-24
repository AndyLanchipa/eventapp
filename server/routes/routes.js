const { response } = require("express");
const express = require("express");
const router = express.Router();
const Schemas = require("../models/schemas");
const mongoose = require("mongoose");
const mongo = require("mongodb");

router.post("/signup", (req, res) => {
  console.log(req.body);
  const user = new Schemas.Users({
    userId: req.body.userId,
    profileUrl: req.body.profileUrl,
    name: req.body.name,
  });
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/getUser/:id", (req, res) => {
  const user = Schemas.Users.findOne(
    { userId: req.params.id },
    (err, userData) => {
      if (err) throw err;
      if (!userData) {
        return res.status(404).send({ message: "User not found" });
      } else {
        res.send(JSON.stringify(userData));
      }

      res.end();
    }
  );
});
//get all user for event
router.get("/getEventMembers/:eventId", (req, res) => {
  const members = req.body.members;
  console.log(members);

  const findUsers = Schemas.Users.find(
    { _id: { $in: members } },
    (err, userData) => {
      if (err) {
        res.status(500).json({ message: "Error retrieving entries." });
      } else {
        console.log(userData);
        res.json(userData);
      }
    }
  );
});

//get all events on site

router.get("/getAllEvents", (req, res) => {
  const events = Schemas.Events;

  const listOfEvents = events.find({}, (err, event) => {
    if (err) throw err;
    if (event) {
      res.end(JSON.stringify(event));
    } else {
      res.end();
    }
  });
});

router.post("/addEvents/:id", (req, res) => {
  const user = Schemas.Users.findOne(
    { userId: req.params.id },
    (err, userData) => {
      if (err) throw err;

      if (!userData) {
        return res.status(404).send({ message: "User not found" });
      } else {
        const event = new Schemas.Events({
          eventId: new mongo.ObjectId(),
          title: req.body.title,
          description: req.body.description,
          creatorId: userData.userId,
          members: [userData._id.toString()],
        });
        event.save();
        console.log(event);
      }
    }
  );
});
module.exports = router;
