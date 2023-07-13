import mongoose, { Model } from "mongoose";
import { Schema } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  fees: {
    type: Number,
    required: true,
    min: 10000,
  },
});

const studetModel = mongoose.model("students", studentSchema);

export default studetModel;
