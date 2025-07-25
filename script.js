document.addEventListener('DOMContentLoaded', function() {
    // Photo Slideshow
    const slides = document.querySelectorAll('.gallery img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Change every 3 seconds
    }

    // Highlight upcoming announcements
    const announcements = document.querySelectorAll('.announcement');
    const today = new Date();

    announcements.forEach(item => {
        const dateText = item.getAttribute('data-date');
        if (dateText) {
            const eventDate = new Date(dateText);
            if (eventDate >= today) {
                item.style.color = 'green';
                item.style.fontWeight = 'bold';
            }
        }
    });
});