

// saving previous version
document.body.style.overflowX = "hidden";
//for loading spinner
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
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

//popup window attempt three
// Get all modal links
// Get all modal links
const modalLinks = document.querySelectorAll('.button');

// Add click event listeners to modal links
modalLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1); // Remove the #
    const modal = document.getElementById(target);

    // Display the modal (fade-in effect)
    modal.style.display = 'block';
  //  to prevent scrolling
  document.body.style.overflow = "hidden";


    // Close modal when clicking outside of it
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        this.style.display = 'none';
        // to enable scrolling
        document.body.style.overflow = "auto";

      }
    });

    // Close modal when clicking the close button
    const closeButton = modal.querySelector('.closemodal');
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'none';
      // to enable scrolling
      document.body.style.overflow = "auto";

    });
  });
});



// leave last, its prone to mess up some code
//scroll reveal
ScrollReveal().reveal('.card', { easing: "ease-in" });
