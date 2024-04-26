# bayt_task
To use the slider component in your HTML document, follow this structure:

<div class="slider" data-slider="3400">
    <div class="slides">
        <div class="slide">
            <div class="slide-content">
                <img class="slide-content-image" src="https://www.melivecode.com/users/2.png" alt="Slide Image">
                <p>Slide 1</p>
            </div>
        </div>
        <!-- Add more slides as needed -->
    </div>
    <button class="slider-btn prev">&#10094;</button>
    <button class="slider-btn next">&#10095;</button>
    <div class="dots"></div>
</div>


The outer <div> element with the class slider initializes the slider component.

The data-slider attribute specifies the autoplay delay in milliseconds (e.g., 3400 for delay between slides).

Inside the slider, the <div> with the class slides contains all the slide items.

Each individual slide is represented by a <div> with the class slide.

Within each slide, you can include content such as images (<img>) and text (<p>) or any thing you want to put.


You can add more slides by duplicating the <div class="slide">...</div> structure as needed.

The <button> elements with the classes slider-btn prev and slider-btn next represent the previous and next navigation buttons, respectively.
Finally, the <div> with the class dots is used for displaying navigation dots.


