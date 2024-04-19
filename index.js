// Slider configurations
// Initialize sliders on DOMContentLoaded event

// document.addEventListener('DOMContentLoaded', function () {
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         const config = [
//             { autoplayDelay: 3000 },

//         ][index];
//         new Slider(slider.id, config.autoplayDelay);
//     });
// });

// Populate Slider 1 with data
const slider1Slides = document.querySelector('#slider1 .slides');
userData.forEach(user => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
        <div class="slide-content">
            <p>${user.content}</p>
            <div class='slide-content-image-container'> 
                <img class='slide-content-image' src="${user.avatar}" alt="${user.fname} ${user.lname}">
                <h2>${user.fname} ${user.lname}</h2>
                <p>${user.username}</p>
                <button class='button'>Read More</button>
            </div>
        </div>
    `;
    slider1Slides.appendChild(slide);

});

new Slider('slider1', 5000); // Assuming no autoplay for slider4


// Populate Slider 2 with data
// const slider2Slides = document.querySelector('#slider2 .slides');
// userData2.forEach(user => {
//     const slide = document.createElement('div');
//     slide.classList.add('slide');
//     slide.innerHTML = `
//         <div class="slide-content">
//             <p>${user.content}</p>
//             <div class='slide-content-image-container'> 
//                 <img class='slide-content-image' src="${user.avatar}" alt="${user.fname} ${user.lname}">
//                 <h2>${user.fname} ${user.lname}</h2>
//                 <p>${user.username}</p>
//              </div>
//         </div>
//     `;
//     slider2Slides.appendChild(slide);
// });



const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://www.melivecode.com/api/users?page", requestOptions)
    .then(response => response.json())

    .then((result) => {
        console.log(result)

        const slider4Slides = document.querySelector('#slider4 .slides');
        console.log(result.length)
        result.forEach(user => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.innerHTML = `
                <div class="slide-content">
                        <div class='slide-content-image-container'> 
                        <img class='slide-content-image' src="${user.avatar}" alt="${user.fname} ${user.lname}">
                        <h2>${user.fname} ${user.lname}</h2>
                        <p>${user.username}</p>
                        <a href='userInfo.html?id=${user.id}' class='button'>Read More</a>
                        <br>
                        <br>
                    </div>
                </div>
            `;
            slider4Slides.appendChild(slide);
        });
        new Slider('slider4', 1000); // Assuming no autoplay for slider4


    }

    )
    .catch((error) => console.error(error)); 