function updateCurrentDateTime() {
    const currentDateElement = document.getElementById('current-date');
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();

    // Array of Finnish weekday names.
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the day of the week as a number (0-6).
    const dayOfWeek = now.getDay();

    // Get the day of the month.
    const dayOfMonth = now.getDate();

    // Get the month in Finnish.
    const monthsInFinnish = ['January', 'February', 'maaliskuuta', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthsInFinnish[now.getMonth()];

    // Get the year.
    const year = now.getFullYear();

    // Format the full date in Finnish.
    const formattedDate = `${weekdayNames[dayOfWeek]}, ${dayOfMonth}. ${month} ${year}`;

    // Format time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    currentDateElement.textContent = `Date: ${formattedDate}`;
    currentTimeElement.textContent = `Time: ${formattedTime}`;
}

// Call the function to update the date and time immediately when the page loads.
updateCurrentDateTime();

// Update the date and time every minute (60,000 milliseconds).
setInterval(updateCurrentDateTime, 60000);
