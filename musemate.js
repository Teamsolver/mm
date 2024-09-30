<script>
  // Function to check if elements are in view
  function animateOnScroll() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              card.classList.add('visible');
          }
      });
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', animateOnScroll);
  
  // Trigger animation on load
  window.addEventListener('load', animateOnScroll);
</script>

