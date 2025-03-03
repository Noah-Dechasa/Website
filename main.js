document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animations for Sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Trigger animation
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is in view
    });

    sections.forEach(section => {
        observer.observe(section); // Observe all sections
    });

    // Slideshow functionality for milestones
    const slideshows = document.querySelectorAll(".slideshow-container");

    slideshows.forEach((slideshow) => {
        const slides = slideshow.querySelectorAll(".slide");
        let currentSlide = 0;

        // Function to show the next slide
        const showNextSlide = () => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        };

        // Set the first slide to active
        slides[currentSlide].classList.add("active");

        // Change slides every 3 seconds
        setInterval(showNextSlide, 3000);
    });

    // Form submission alert for the contact form
    document.getElementById("contactForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        this.reset(); // Clear the form fields after submission
    });
});
