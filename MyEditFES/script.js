//for loading spinner
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
});



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
    // document.body.style.overflow = "hidden";
  //  to prevent scrolling
  //  try to figure out how to restrict scrolling to a certain amount
  //   document.body.style.overflow = "hidden";

    const initialScroll = window.scrollY;

    // Add a scroll event listener
    const scrollHandler = () => {
      // Limit scrolling to 100 pixels below the initial scroll position
      if (window.scrollY > initialScroll || window.scrollY < initialScroll) {
        window.scrollTo(initialScroll+2, initialScroll + 50);
        console.log("done")
      }
    };
    window.addEventListener('scroll', scrollHandler);





    // Close modal when clicking outside of it
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        this.style.display = 'none';
        // to enable scrolling
        document.body.style.overflow = "auto";

        window.removeEventListener('scroll', scrollHandler);

      }
    });

    // Close modal when clicking the close button
    const closeButton = modal.querySelector('.closemodal');
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'none';
      // to enable scrolling
      //look at this to 'limit' scrolling on modal open
      //https://youtu.be/V9CY0F4Wc7M?si=xTwKTskCcdQuomcW
      document.body.style.overflow = "auto";

    });
  });
});



// leave last, its prone to mess up some code
//scroll reveal
ScrollReveal().reveal('.card', { easing: "ease-in" });
