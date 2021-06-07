const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", async (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutDB) => {
      console.log(workoutDB);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", async (req, res) => {
  console.log(req.body);
  try {
    const results = await Workout.create(req.body);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  console.log(req.body);
  try {
    const results = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/api/workouts/:id", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutDB) => {
      console.log(workoutDB);
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
