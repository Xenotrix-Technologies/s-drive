// Reveal Animation on Scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();

// Sticky Navbar shrink effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "20px 0";
    navbar.style.boxShadow = "none";
  }
});

// Simple Form Validation Example
document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Here you would normally handle the form submission via AJAX
        // For demonstration, we just prevent default and show an alert
        event.preventDefault();
        alert('Thank you! Your request has been submitted successfully.');
        form.reset();
        form.classList.remove('was-validated');
        return;
      }
      form.classList.add('was-validated');
    }, false);
  });
});
