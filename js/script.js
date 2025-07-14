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