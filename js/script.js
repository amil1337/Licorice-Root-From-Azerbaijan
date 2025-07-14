document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const productModal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-button");

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        // Add 'active' class to immediately make it visible and start opacity transition
        productModal.classList.add("active"); 
    }

    function closeModal() {
        // Remove 'active' class to start opacity transition (fade out)
        productModal.classList.remove("active");
        
        // After the fade out transition completes, hide the modal completely
        // This timeout should match the CSS transition duration for opacity and visibility
        setTimeout(() => {
            modalImage.src = ""; // Clear image source
        }, 300); // 300ms matches the transition duration in CSS
    }

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            const imageSrc = card.dataset.imageSrc;
            openModal(imageSrc);
        });
    });

    closeButton.addEventListener("click", closeModal);

    productModal.addEventListener("click", (event) => {
        if (event.target === productModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && productModal.classList.contains("active")) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Product Modal functionality (existing code)
    const productCards = document.querySelectorAll('.product-card');
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.dataset.imageSrc;
            modalImage.src = imgSrc;
            modal.classList.add('active'); // Use 'active' class for visibility
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- START: Hero Image Carousel Functionality (NEW) ---
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    // Function to display a specific slide
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active'); // Make the current slide visible
            } else {
                slide.classList.remove('active'); // Hide other slides
            }
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length; // Cycle through slides
        showSlide(currentSlide);
    }

    // Initialize the first slide (ensure it's active when page loads)
    showSlide(currentSlide);

    // Change slide every 5 seconds (5000 milliseconds)
    setInterval(nextSlide, 5000);
    // --- END: Hero Image Carousel Functionality (NEW) ---
});