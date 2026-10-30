// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Skills category filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            skillCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    function reveal() {
        const reveals = document.querySelectorAll('section');

        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
});


//dynamic text profile page
document.addEventListener("DOMContentLoaded", function () {

  const dynamicContent = document.getElementById("dynamic-text");

  const phrases = ["Software Developer...", "IT Support Specialist..."]
  let pharseIndex = 0;
  let letterIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 75

  function printLetters(phrase) {

      if (letterIndex == phrase.length) {
          // clear letter which have been typed
          clearLetters();
      }
      else if (letterIndex < phrase.length) {
          dynamicContent.textContent += phrase.charAt(letterIndex);
          letterIndex += 1;
          setTimeout(function () {
              printLetters(phrase)
          }, typingSpeed)
      }
  }

  function clearLetters() {
      if (letterIndex == -1) {
          pharseIndex = (pharseIndex + 1) % phrases.length;
          letterIndex = 0;
          printLetters(phrases[pharseIndex])
      }
      else if (letterIndex > -1) {
          let updatedPhrase = "";
          for (let index = 0; index < letterIndex; index++) {
              updatedPhrase += phrases[pharseIndex].charAt(index);

          }
          dynamicContent.textContent = updatedPhrase;
          letterIndex -= 1;
          setTimeout(clearLetters, erasingSpeed)
      }
  }

  printLetters(phrases[pharseIndex]);
})

