# bayt_task

In this slider implementation, the slides work in a circular manner.
Instead of a linear transition where slides move from left to right or vice versa, the slides move along a circular path.

To use the slider component in your HTML document, follow this structure:
<div>

    <div class="slider"  data-slider='{"delay":8000}'>
    <div class="slides">
        <div class="slide">
            <div class="slide-content">
                <p>Slide 1</p>
            </div>
        </div>
        <!-- Add more slides as needed -->
    </div> 
    </div>

</div>
 

The outer div element with the class slider initializes the slider component.

The data-slider attribute specifies the autoplay delay in milliseconds (e.g., 3400 for a delay between slides).

Inside the slider, the div with the class slides contains all the slide items.

Each individual slide is represented by a div with the class slide.

Within each slide, you can include content such as images and text or any thing you want to put.

You can add more slides by duplicating the div element with the class slider structure as needed.


