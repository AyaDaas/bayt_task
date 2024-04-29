// Define a class called Slider
class Slider {
    // Constructor function for creating a new Slider instance

    constructor(sliderElement) {
        // Features for the slider 
        this.slider = sliderElement;
        this.slides = sliderElement.querySelector('.slides');
        this.slideItems = Array.from(this.slides.querySelectorAll('.slide'));
        this.autoplayDelay = this.slider.dataset.slider ? JSON.parse(this.slider.dataset.slider).delay : 0;
        this.currentSlideIndex = 0;
        this.totalSlides = this.slideItems.length;
        this.interval = null;

        this.angleIncrement = (2 * Math.PI) / this.totalSlides;
        this.radius = 100;
        this.init();
    }

    // Initialize the slider
    init() {
        this.showSlide(this.currentSlideIndex);

        this.createNavigationArrows();

        // Render navigation dots
        this.renderNavigation();

        // Update the active dot
        this.updateDots();

        this.addEventListeners();


        this.updateSlidePosition()

        // Start autoplay if autoplayDelay is specified 
        if (this.autoplayDelay !== 0) {
            this.startAutoplay();
        }
    }


    showSlide(index) {
        this.slideItems.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    createNavigationArrows() {
        const prevButton = document.createElement('button');
        prevButton.classList.add('slider-btn', 'prev');
        prevButton.innerHTML = '&#10094;';
        prevButton.addEventListener('click', () => this.prevSlide());
        this.slider.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.classList.add('slider-btn', 'next');
        nextButton.innerHTML = '&#10095;';
        nextButton.addEventListener('click', () => this.nextSlide());
        this.slider.appendChild(nextButton);

        this.arrowPrev = prevButton;
        this.arrowNext = nextButton;

    }


    addEventListeners() {
        this.arrowPrev.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.arrowPrev.addEventListener('mouseleave', () => this.startAutoplay());
        this.arrowNext.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.arrowNext.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Render navigation dots based on the total number of slides
    renderNavigation() {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dots');
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        this.slider.appendChild(dotsContainer);
        this.dotsContainer = dotsContainer;
        this.updateDots();
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
        this.showSlide(this.currentSlideIndex);

        if (this.autoplayDelay) {
            this.startAutoplay();
        }
    }

    // Move to the next slide
    nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
        this.showSlide(this.currentSlideIndex);

    }

    // Move to the previous slide
    prevSlide() {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateDots();
        this.updateSlidePosition();
        this.showSlide(this.currentSlideIndex);

    }


    // Update the position of slides based on the current slide index
    updateSlidePosition() {
        // const offset = -this.currentSlideIndex * 100;
        // // console.log(this.totalSlides)

        // this.slides.style.transition = 'transform .4s ease-in';
        // this.slides.style.transform = `translateX(${offset}%)`;
        this.slideItems.forEach((slide, i) => {
            const angle = i * this.angleIncrement;
            const x = this.radius * Math.cos(angle);
            const y = this.radius * Math.sin(angle);

            slide.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        });

    }

    // updateSlidePosition() {
    //     const currentSlide = this.slideItems[this.currentSlideIndex];
    //     this.slideItems.forEach((slide) => {
    //         if (slide === currentSlide) {
    //             slide.style.opacity = 1;
    //         } else {
    //             slide.style.opacity = 0;
    //         }
    //     });
    // }





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


