
// event listeners for buttons, 

let advanceSlide = document.getElementById('nextSlide'); 

let prevSlide = document.getElementById('prevSlide');

let imgSlider = document.getElementById('image-slide');

let currentImg = document.getElementsByClassName("current");

let currentImgArr = Array.from(currentImg);  

// let img = document.getElementById("img5-armbar"); 

// let currentImgArr = Array.from(currentImg);

console.log(currentImgArr);

// console.log(advanceSlide);

advanceSlide.addEventListener("click", () => { 
    console.log("you clicked the adv slide btn");



}) 


// How about you try to make a function in which you can change which image is visible, 

// rather than just the last one? 

prevSlide.addEventListener("click", () => { 
    console.log("you clicked the prev slide btn");

    // for (let i = 0; i < currentImgArr.length; i++) { 
    //     let img = currentImgArr[i]; 

    //     console.log(img);
    // } 
    
    // changeImg();

}) 


let circleOne = document.getElementById("img-circle-1"); 

let circleTwo = document.getElementById("img-circle-2"); 

let circleThree = document.getElementById("img-circle-3");

let circleFour = document.getElementById("img-circle-4"); 

let circleFive = document.getElementById("img-circle-5"); 

let img1 = document.getElementById("img1-throw"); 

let img2 = document.getElementById("img2-throw"); 

let img3 = document.getElementById("img3-pin"); 

let img4 = document.getElementById("img4-gripping");

let img5 = document.getElementById("img5-armbar");

circleOne.addEventListener("click", () => { 
    console.log("circle one"); 

    imgSlider.append(img1);

})

circleTwo.addEventListener("click", () => { 
    console.log("circle two");

    imgSlider.append(img2);
}) 

circleThree.addEventListener("click", () => { 
    console.log("circle three"); 

    imgSlider.append(img3);
}) 


circleFour.addEventListener("click", () => {
    console.log("circle four"); 

    imgSlider.append(img4);
}) 

circleFive.addEventListener("click", () => {
    console.log("circle five");

    imgSlider.append(img5);
})




// function changeImg() { 
//     img.style.display = "none";
// } 

// let circleButtons = document.querySelectorAll(".img-circles"); 

// let circleButtonsArr = Array.from(circleButtons);

// console.log(circleButtonsArr); 

// circleButtonsArr.forEach(circle => circle.addEventListener("click", () => { 
//     console.log("you clicked the btn");
// }))

// circleButtonsArr.addEventListener("click", () => {
//     console.log("you clicked a circle btn");
// })





//  get the circle logic down, if I click on a certain circle, 

// it will display that img with that certain index, 




// the pictures are held together in a container, 

// how do I move the container that holds pictures into the frame? 

// OK so today, I am working on the image slider, 

// I will look back at previous messages, 

// but I need to find a way to advance the container that holds the slides 

// position correctly using, --before class, 

// apply the before class to all elements, 

// think of at least a couple of questions you can ask, 

// how can I apply these classes to the correct pictures ? 

// Make a class, and have the picture inherit the class? 

// trying to give my elements a starting class? 

// how to give elements before class, so they are stacked on top of eachother ? 

// give each element, have a before, current and after class, 

// I don't know how to give an element a before class? 

// how to properly stack the pictures on top of eachother, 

// give each img element a class, before? 

// make the class position absolute? 

// how can I effectively apply classes to the images? Add the classes after the adv slide btn or prev button is pressed 

// how am I supposed to apply the current class? 

// make a class and give it properties? 

// how can I dynamically add classes to change the status of the pictures? 

// how can I add the current class? 