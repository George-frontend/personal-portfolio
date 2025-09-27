// Select all elements with the class "image-slider"
const sliders = document.querySelectorAll('.image-slider');

// Loop through each slider
sliders.forEach(slider => {
  // Get all images inside the current slider
  const images = slider.querySelectorAll('img');
  let current = 0; // Track the current active image index

  // If there is more than one image, enable automatic slideshow
  if (images.length > 1) {
    // Set the first image as active
    images[current].classList.add('active');

    // Change the active image every 4 seconds
    setInterval(() => {
      images[current].classList.remove('active'); // Remove "active" class from current image
      current = (current + 1) % images.length;    // Move to the next image (loop back to start)
      images[current].classList.add('active');    // Add "active" class to the new current image
    }, 4000);
  } else {
    // If there is only one image, just set it as active
    images[0].classList.add('active');
  }
});
