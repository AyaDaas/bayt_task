// Define a class called Slider
class Slider {
    // Constructor function for creating a new Slider instance
    constructor(containerId, autoplayDelay) {
        // Set the container element of the slider based on the provided container ID
        this.container = document.getElementById(containerId);

        // Get an array of slide elements within the container
        this.slides = Array.from(this.container.querySelectorAll('.slide'));

        this.autoplayDelay = autoplayDelay;

        // Initialize the current slide index to 0
        this.currentSlide = 0;

        // Calculate the total number of slides
        this.totalSlides = this.slides.length;

        // Initialize the interval ID for autoplay
        this.interval = null;

        // Initialize the slider
        this.init();
    }

    // Initialize the slider
    init() {
        // Render navigation dots
        this.renderNavigation();

        // Update the active dot
        this.updateDots();

        // Add event listeners for prev and next buttons
        this.container.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        this.container.querySelector('.next').addEventListener('click', () => this.nextSlide());

        // Add event listeners for dot navigation
        this.container.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Start autoplay if autoplayDelay is specified
        if (this.autoplayDelay) {
            this.startAutoplay();
        }
    }

    // Render navigation dots based on the total number of slides
    renderNavigation() {
        const dotsContainer = this.container.querySelector('.dots');
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        }
    }

    // Update the active dot based on the current slide index
    updateDots() {
        const dots = this.container.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Move to the specified slide index
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;
        this.currentSlide = index;
        this.updateDots();
        this.updateSlidePosition();
    }

    // Move to the next slide
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
    }

    // Move to the previous slide
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
    }

    // Update the position of slides based on the current slide index
    updateSlidePosition() {
        const offset = -this.currentSlide * 100;
        this.slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    updateSlidePosition() {
        const offset = -this.currentSlide * 100;
        this.slides.forEach((slide, index) => {
            slide.style.transition = 'transform .01s  ease'; // Add smooth transition effect
            slide.style.transitionDelay = `.1s linear`; // Adjust transition delay
            slide.style.transform = `translateX(${offset}%)`;
        });
    }


    // Start autoplay for the slider
    startAutoplay() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
}

