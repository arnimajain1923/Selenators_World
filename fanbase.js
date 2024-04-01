     
  // Function to handle the scaling toggle when clicking on a card
  function toggleScaleOnCard(card) {
    card.classList.toggle('scaled');
  }

  // Function to add event listeners to each card
  function addCardEventListeners() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        toggleScaleOnCard(card);
      });

      // Show the .details element when the card is hovered
      card.addEventListener('mouseenter', () => {
        card.querySelector('.details').style.bottom = '0';
      });

      card.addEventListener('mouseleave', () => {
        card.querySelector('.details').style.bottom = '-100px';
      });
    });
  }

    // Function to handle the search functionality
function handleSearch() {
  const searchField = document.getElementById('search-field');
  const searchQuery = searchField.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(searchQuery)) {
      card.classList.remove('filtered'); // Show matched cards
    } else {
      card.classList.add('filtered'); // Hide non-matched cards
      card.querySelector('.details').style.bottom = '-100px'; // Hide details of hidden cards
    }
  });
}

// Function to add event listeners to each card and search input
function addEventListeners() {

  // Add event listener for search input
  const searchField = document.getElementById('search-field');
  searchField.addEventListener('input', handleSearch);
}
  // Call the function to add event listeners after the page loads
  window.addEventListener('load', addCardEventListeners);


//toggling navbar
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarLinks = document.getElementById("navbarLinks");
  
  navbarToggle.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
  });