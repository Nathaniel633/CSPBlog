 // Declare a counter for difficulty skills
    let difficultyCount = 0;
    let currentTotalDifficulty = 0;
    let currentExecutionScore = 10;

    function addDifficulty(value) {
        if (difficultyCount < 10) {  // Check if less than 10 inputs have been made
            currentTotalDifficulty += value;
            document.getElementById("totalDifficulty").textContent = currentTotalDifficulty.toFixed(1);
            difficultyCount++;  // Increment the counter
        } else {
            alert('Maximum of 10 difficulty skills reached.');  // Alert user no more inputs allowed
        }
    }

    function resetDifficulty() {
        currentTotalDifficulty = 0;
        document.getElementById("totalDifficulty").textContent = currentTotalDifficulty.toFixed(1);
        difficultyCount = 0;  // Reset the counter
    }

    function subtractDeduction(value) {
        if (currentExecutionScore > 0) {
            currentExecutionScore -= value;
            currentExecutionScore = Math.max(currentExecutionScore, 0);
            document.getElementById("executionScore").textContent = currentExecutionScore.toFixed(1);
        }
    }

    function resetExecution() {
        currentExecutionScore = 10;
        document.getElementById("executionScore").textContent = currentExecutionScore.toFixed(1);
    }

    function displayText() {
        var extraDeductions = parseFloat(document.getElementById("extra").value);
        var finalScore = currentTotalDifficulty + currentExecutionScore + extraDeductions + 2;
        document.getElementById("finalScore").textContent = finalScore.toFixed(1);
    }
