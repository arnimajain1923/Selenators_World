
  // Function to toggle the scale of the clicked image
  function toggleScale(image) {
    const container = image.parentElement;

    // Check if the container already has the "scaled" class
    if (container.classList.contains('scaled')) {
      // If the container has the "scaled" class, remove it to return to the original size
      container.classList.remove('scaled');
    } else {
      // If the container does not have the "scaled" class, add it to scale the image
      container.classList.add('scaled');
    }
  }