const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
