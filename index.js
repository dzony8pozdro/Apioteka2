// smartphone integration
function toggleMobileMenu() {
  const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = menuButton.querySelector("svg.block"); // Icon when menu is closed
  const closeIcon = menuButton.querySelector("svg.hidden"); // Icon when menu is open

  // Toggle the menu visibility
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}
// Add event listener to the menu button
document
  .querySelector('[aria-controls="mobile-menu"]')
  .addEventListener("click", toggleMobileMenu);
// more less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Więcej";
    moreText.style.display = "none";
    window.scrollTo(0, document.querySelector("h2").offsetTop);
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Mniej";
    moreText.style.display = "inline";
    window.scrollTo(0, document.querySelector("h2").offsetTop);
  }
}
// Open Modal Function
function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  modal.classList.remove("hidden");
  modalImage.src = img.src;

  // Set up arrow navigation
  leftArrow.onclick = () => navigateToPreviousImage(img);
  rightArrow.onclick = () => navigateToNextImage(img);
}
// Close Modal Function
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}
// Function to Handle Arrow Key Navigation
function handleArrowKeys(event) {
  const modalImage = document.getElementById("modal-image");
  if (!modalImage ||
    !document.getElementById("modal").classList.contains("hidden")) {
    if (event.key === "ArrowLeft") {
      navigateToPreviousImage(modalImage);
    } else if (event.key === "ArrowRight") {
      navigateToNextImage(modalImage);
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
}
// Function to Navigate to Previous Image
function navigateToPreviousImage(currentImage) {
  const gallery = document.querySelector("#gallery1");
  const images = gallery.querySelectorAll("img");
  const currentIndex = Array.from(images).findIndex(
    (img) => img.src === currentImage.src
  );

  if (currentIndex === -1) return;

  const previousIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  openModal(images[previousIndex]);
}
// Function to Navigate to Next Image
function navigateToNextImage(currentImage) {
  const gallery = document.querySelector("#gallery1");
  const images = gallery.querySelectorAll("img");
  const currentIndex = Array.from(images).findIndex(
    (img) => img.src === currentImage.src
  );

  if (currentIndex === -1) return;

  const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  openModal(images[nextIndex]);
}
// Event Listener for Closing Modal
document.getElementById("closeModal").addEventListener("click", closeModal);
// Event Listener for Arrow Key Navigation
document.addEventListener("keydown", handleArrowKeys);
