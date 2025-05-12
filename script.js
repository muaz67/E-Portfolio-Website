function submitPoll() {
    const options = document.getElementsByName("topic");
    let selected = "";

    // Get selected radio value
    for (const option of options) {
        if (option.checked) {
            selected = option.value;
            break;
        }
    }

    // Show alert if nothing selected
    if (!selected) {
        alert("⚠️ Please select a topic before submitting.");
        return;
    }

    // Simulated percentage data
    const results = {
        Tech: { tech: 65, food: 20, travel: 15, feedback: "💻 You're a future innovator!" },
        Food: { tech: 20, food: 65, travel: 15, feedback: "🍜 You're a foodie with great taste!" },
        Travel: { tech: 15, food: 30, travel: 55, feedback: "✈️ You love to explore the world!" }
    };

    // Get values for selected topic
    const { tech, food, travel, feedback } = results[selected];

    // Show result container
    document.getElementById("pollResult").style.display = "block";

    // Update bar widths
    document.getElementById("techBar").style.width = tech + "%";
    document.getElementById("foodBar").style.width = food + "%";
    document.getElementById("travelBar").style.width = travel + "%";

    // Update percentage text
    document.getElementById("techPercent").textContent = tech + "%";
    document.getElementById("foodPercent").textContent = food + "%";
    document.getElementById("travelPercent").textContent = travel + "%";

    // Show feedback emoji/message
    document.getElementById("pollFeedback").textContent = feedback;
}
