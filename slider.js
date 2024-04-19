// Define a class called Slider
class Slider {
    // Constructor function for creating a new Slider instance

    constructor(sliderElement) {
        // Features for the slider 
        this.slider = sliderElement;
        this.slides = sliderElement.querySelector('.slides');
        this.slideItems = Array.from(this.slides.querySelectorAll('.slide'));
        this.arrowPrev = this.slider.querySelector('.slider-btn.prev');
        this.arrowNext = this.slider.querySelector('.slider-btn.next');
        this.dotsContainer = this.slider.querySelector('.dots');
        this.autoplayDelay = parseInt(this.slider.dataset.slider) || 0;
        this.currentSlideIndex = 0;
        this.totalSlides = this.slideItems.length;
        this.interval = null;
        this.init();
    }

    // Initialize the slider
    init() {
        // Render navigation dots
        this.renderNavigation();

        // Update the active dot
        this.updateDots();

        // Add event listeners for prev and next buttons
        this.arrowPrev.addEventListener('click', () => this.prevSlide());
        this.arrowNext.addEventListener('click', () => this.nextSlide());

        // Add event listeners for the arrows buttons
        this.arrowPrev.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.arrowPrev.addEventListener('mouseleave', () => this.startAutoplay());
        this.arrowNext.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.arrowNext.addEventListener('mouseleave', () => this.startAutoplay());

        // Start autoplay if autoplayDelay is specified 
        if (this.autoplayDelay) {
            this.startAutoplay();
        }
    }
    // Render navigation dots based on the total number of slides
    renderNavigation() {
        const dotsContainer = this.dotsContainer;
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            // Add event listeners for dot navigation
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Update the active dot
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === this.currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Move to the specified slide index
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;
        this.currentSlideIndex = index;
        this.updateDots();
        this.updateSlidePosition();
        if (this.autoplayDelay) {
            this.startAutoplay();
        }
    }

    // Move to the next slide
    nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
    }

    // Move to the previous slide
    prevSlide() {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
    }


    // Update the position of slides based on the current slide index
    updateSlidePosition() {
        const offset = -this.currentSlideIndex * 100;
        console.log(this.currentSlideIndex)
        // console.log(this.totalSlides)
        if (this.currentSlideIndex === 0) {
            this.slides.style.transition = 'none';
        }
        else {
            this.slides.style.transition = 'transform .4s ease-in';
        }

        this.slides.style.transform = `translateX(${offset}%)`;

    }
    // Start autoplay for the slider
    startAutoplay() {
        clearInterval(this.interval); // Clear any previous interval
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }

    //Pause autoplay for the slider
    pauseAutoplay() {
        clearInterval(this.interval);
    }
}
//Creates a new Slider instance for each slider element found in the document.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider').forEach(sliderElement => {
        new Slider(sliderElement);
    });
});
