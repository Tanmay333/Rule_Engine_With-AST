const mongoose = require("mongoose");

const ruleSchema = new mongoose.Schema(
  {
    ruleString: {
      type: String,
      required: true,
    },
    parsedRule: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const RuleModel = mongoose.model("Rule", ruleSchema);

module.exports = RuleModel;
