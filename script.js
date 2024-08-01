//for loading spinner
window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.style.display = "none";
});

//
// //pop up window
// const openModalButtons= document.querySelectorAll('[data-modal-target]');
// const closeModalButtons= document.querySelectorAll('[data-close-button]');
// const overlay= document.getElementById('overlay');
//
// openModalButtons.forEach(button =>{
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })
//
// overlay.addEventListener('click', () => {
//   const modals= document.querySelectorAll('.modal.active')
//   modals.forEach(modal =>{
//     closeModal(modal)
//   })
// })
//
//
// closeModalButtons.forEach(button =>{
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })
//
// function openModal(modal){
//   if (modal==null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }
//
// function closeModal(modal){
//   if (modal==null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

// //popup window attempt two
//
// $('#edit').on('click', function(){
//   $('body').addClass('active-modal');
//   $('.box-modal').addClass('modal-show');
// });
//
// $('.overlay').on('click', function(){
//   $('body').removeClass('active-modal');
//   $('.box-modal').removeClass('modal-show');
// })
//
//

// Select all elements with class 'eventBox'
const eventBoxes = document.querySelectorAll(".eventBox");

// Iterate through each eventBox
eventBoxes.forEach((eventBox) => {
  const dateOfEvent = eventBox.querySelector(".date");
  const dateString = dateOfEvent.textContent.trim();

  // Get the ID of the eventBox
  const eventId = eventBox.id;


  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = String(todaysDate.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed, so we add 1
  const day = String(todaysDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;



  if (dateString > formattedDate) {
  } else if (dateString < formattedDate) {
    const eventBoxContainer = document.getElementById(eventId);
    eventBoxContainer.style.display="none";
  } else {

  }
});

//popup window attempt three
// Get all modal links
// Get all modal links
const modalLinks = document.querySelectorAll(".button");


// Add click event listeners to modal links
modalLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href").substring(1); // Remove the #
    const modal = document.getElementById(target);

    // Display the modal (fade-in effect)
    modal.style.display = "block";
    //  to prevent scrolling
    document.body.style.overflow = "hidden";

    // Close modal when clicking outside of it
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
        // to enable scrolling
        document.body.style.overflow = "auto";
      }
    });

    // Close modal when clicking the close button
    const closeButton = modal.querySelector(".closemodal");
    closeButton.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "none";
      // to enable scrolling
      document.body.style.overflow = "auto";
    });
  });
});


const navToggleCheckbox = document.querySelector(".nav-toggle");
const bodyElement = document.body;
let counter = 0
navToggleCheckbox.checked=false;

// Add event listener for clicks anywhere on the document
// handles when the menu is not being closed when clicked twice
document.addEventListener("click", function (event) {
  if (event.target === navToggleCheckbox) {
    counter++;
    if (counter > 1 ) {
      counter=0; // reseting the counter :|
      navToggleCheckbox.checked=false;
  }
}
})

// Add event listener for clicks anywhere on the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is not the checkbox itself
  if (event.target !== navToggleCheckbox) {
    // Check if the clicked element is not within the body element (to handle potential modals/overlays)
    if (!event.target.isSameNode(bodyElement)) {
      // Uncheck the checkbox if it's checked
      if (!(navToggleCheckbox.checked)) {
        navToggleCheckbox.checked = false;
        counter = 0;
      }
      else{
        navToggleCheckbox.checked = false;
      }
    }
  }
});

// leave last, its prone to mess up some code

//scroll reveal
ScrollReveal().reveal(".card", { easing: "ease-in" });