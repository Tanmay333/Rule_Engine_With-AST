// helpers/ast.js

// Function to evaluate AST based on input data
const evaluateAST = (ast, inputData) => {
  if (!ast || !inputData) {
    return false;
  }

  if (ast.type === "operand") {
    const { field, operator, value } = ast.value;
    if (!inputData.hasOwnProperty(field)) {
      return false; // If input data does not have the required field
    }

    switch (operator) {
      case ">":
        return inputData[field] > value;
      case "<":
        return inputData[field] < value;
      case "=":
        return inputData[field] === value;
      case ">=":
        return inputData[field] >= value;
      case "<=":
        return inputData[field] <= value;
      default:
        return false;
    }
  } else if (ast.type === "operator") {
    const leftResult = evaluateAST(ast.left, inputData);
    const rightResult = evaluateAST(ast.right, inputData);

    switch (ast.value) {
      case "AND":
        return leftResult && rightResult;
      case "OR":
        return leftResult || rightResult;
      default:
        return false;
    }
  }

  return false;
};

module.exports = {
  evaluateAST,
};
