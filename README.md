# Rule Engine with Abstract Syntax Tree (AST)

## Overview

This project is a simple 3-tier rule engine application designed to determine user eligibility based on various attributes such as age, department, income, and experience. The system uses an Abstract Syntax Tree (AST) to represent conditional rules, allowing for dynamic creation, combination, and modification of these rules.

## Features

- **Dynamic Rule Creation**: Create rules using a simple string format and convert them into an AST representation.
- **Rule Combination**: Combine multiple rules into a single AST to minimize redundant checks.
- **Rule Evaluation**: Evaluate user eligibility against defined rules based on provided attributes.
- **Error Handling**: Implement validation for rule strings and data formats.
- **MongoDB Integration**: Store rules and metadata in a MongoDB database.

API Design
Endpoints
Create Rule:

create_rule(rule_string): Takes a rule string and returns a Node object representing the corresponding AST.
Combine Rules:

combine_rules(rules): Takes a list of rule strings and combines them into a single AST.
Evaluate Rule:

evaluate_rule(data): Takes a JSON representation of the AST and user attribute data to evaluate eligibility.


## Data Structure

The AST is represented using a Node structure with the following fields:

```javascript
class Node {
  constructor(type, left = null, right = null, value = null) {
    this.type = type; // "operator" or "operand"
    this.left = left; // Reference to left child
    this.right = right; // Reference to right child (for operators)
    this.value = value; // Optional value for operand nodes
  }
}


