const { Schema, default: mongoose } = require("mongoose");

const Project = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    members: {
      type: String,
      required: true,
    },
    views:{
      type:Number,
      required:true,
      default:0
    }
  },
  { timestamps: true }
);

const Project_Schema = mongoose.model("Project", Project);

module.exports = Project_Schema;