const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout",
  },
  weight: {
    type: Number,
    required: "Enter an amount of reps",
  },
  duration: {
    type: TimeRanges,
    required: "Enter the amount of time you spent working out",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
