// ================= Skill Bars Animation =================

// Select all skill-level elements
const skillLevels = document.querySelectorAll('.skill-level');

// Loop through each skill bar
skillLevels.forEach(level => {
  const targetWidth = level.dataset.width; // Get the desired width from data-width attribute
  let width = 0; // Start at 0%
  
  // Select the span to update the percent text
  const percentText = level.querySelector('.skill-percent');

  // Animate the bar
  const interval = setInterval(() => {
    if (width >= parseInt(targetWidth)) {
      // Stop when target width is reached
      clearInterval(interval);
      percentText.textContent = targetWidth; // Set final percent text
    } else {
      width++; // Increment width
      level.style.width = width + '%'; // Set bar width
      percentText.textContent = width + '%'; // Update percent text
    }
  }, 20); // Speed of animation (smaller = faster)
});
