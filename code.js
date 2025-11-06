document.getElementById("calcButton").addEventListener("click", function() {
    const birthInput = document.getElementById("birthDate").value;
    const currentInput = document.getElementById("currentDate").value;
    const resultElement = document.getElementById("result");

    if (!birthInput || !currentInput) {
        resultElement.textContent = "Error you need both dates.";
        return;
    }

    const birthDate = new Date(birthInput);
    const currentDate = new Date(currentInput);

    if (currentDate < birthDate) {
        resultElement.textContent = "Error you can't have negative age";
        return;
    }

    const diffMs = currentDate - birthDate;

    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalYears = Math.floor(totalDays / 365);

    const remainingDays = totalDays % 365;
    const remainingHours = totalHours % 24;
    const remainingMinutes = totalMinutes % 60;
    const remainingSeconds = totalSeconds % 60;

    resultElement.innerHTML = `
        <p> You live approximately.</p>

        <ul style="list-style:none; padding:0;">
            <li>${totalYears} years</li>
            <li>${totalWeeks} weeks</li>
            <li>${totalDays} days</li>
            <li>${totalHours} hours</li>
            <li>${totalMinutes} minutes</li>
            <li>${totalSeconds} seconds</li>
        </ul>
    `;
});
