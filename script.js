// Get all elements with the "cls-hover-card" class
const hoverCards = document.querySelectorAll(".cls-hover-card");

// Add event listener to each hover card element
hoverCards.forEach((hoverCard) => {
  hoverCard.addEventListener("mouseover", () => {
    // Add the active class to all hover card elements
    hoverCards.forEach((card) => {
      card.classList.add("cls-hover-card");
    });
  });

  hoverCard.addEventListener("mouseout", () => {
    // Remove the active class from all hover card elements
    hoverCards.forEach((card) => {
      card.classList.remove("cls-hover-card");
    });
  });
});
