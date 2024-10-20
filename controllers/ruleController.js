const { generateAST, evaluateRuleAST } = require("../helpers/ast");

// Controller to create a rule
exports.createRule = (req, res) => {
  try {
    const { rule } = req.body;

    if (!rule) {
      return res.status(400).json({ message: "Rule is required" });
    }

    // Generate the AST for the given rule
    const ast = generateAST(rule);

    // Save or use the AST as needed (depending on your application logic)
    // For now, just return the AST in the response
    return res.json({ ast });
  } catch (error) {
    console.error("Error creating rule:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to evaluate a rule
exports.evaluateRule = (req, res) => {
  try {
    const { rule, data } = req.body;

    if (!rule || !data) {
      return res
        .status(400)
        .json({ message: "Both rule and data are required" });
    }

    // Evaluate the rule using the AST helper function
    const result = evaluateRuleAST(rule, data);

    // Return the result of the evaluation
    return res.json({ result });
  } catch (error) {
    console.error("Error evaluating rule:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
