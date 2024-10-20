const express = require("express");
const router = express.Router();
const { createRule, evaluateRule } = require("../controllers/ruleController");

// Route to create a rule
router.post("/create-rule", createRule);

// Route to evaluate a rule
router.post("/evaluate-rule", evaluateRule);

module.exports = router;
