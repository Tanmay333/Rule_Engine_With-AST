// Function to handle creating a rule
document
  .getElementById("createRuleButton")
  .addEventListener("click", function () {
    const ruleString = document.getElementById("ruleInput").value;

    if (!ruleString) {
      alert("Please enter a rule string.");
      return;
    }

    fetch("/api/rules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruleString }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert("Rule Created: " + data.message);
        } else {
          alert("Rule created successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error creating rule: " + error);
      });
  });

// Function to handle combining rules
document
  .getElementById("combineRulesButton")
  .addEventListener("click", function () {
    const ruleIds = document
      .getElementById("ruleIdsInput")
      .value.split(",")
      .map((id) => id.trim());

    if (ruleIds.length === 0) {
      alert("Please enter rule IDs to combine.");
      return;
    }

    fetch("/api/rules/combine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruleIds }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert("Rules Combined: " + data.message);
        } else {
          alert("Rules combined successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error combining rules: " + error);
      });
  });

// Function to handle evaluating a rule
document
  .getElementById("evaluateRuleButton")
  .addEventListener("click", function () {
    const ruleId = document.getElementById("evaluateRuleIdInput").value;
    const inputData = {
      age: parseInt(document.getElementById("ageInput").value),
      department: document.getElementById("departmentInput").value,
      salary: parseFloat(document.getElementById("salaryInput").value),
      experience: parseInt(document.getElementById("experienceInput").value),
    };

    if (!ruleId) {
      alert("Please enter a rule ID to evaluate.");
      return;
    }

    fetch(`/api/rules/${ruleId}/evaluate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Rule evaluation complete.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error evaluating rule: " + error);
      });
  });
