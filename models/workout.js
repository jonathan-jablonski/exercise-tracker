const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter the type of workout",
      },

      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Enter the amount of time you spent working out",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
