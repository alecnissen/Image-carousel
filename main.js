
// // event listeners for buttons, 

let advanceSlide = document.getElementById('nextSlide'); 

let prevSlide = document.getElementById('prevSlide');

let imgSlider = document.getElementById('image-slide');

// let currentImg = document.getElementsByClassName("current");

let images = [...imgSlider.querySelectorAll("img")];

let currentImgIndex = 0; 

// let clickedCircle = false;

function changeImage(img) { 
    images.forEach(image => image.classList.remove("current"));
    img.classList.add("current");
} 

advanceSlide.addEventListener("click", () => { 

    currentImgIndex += 1; 

    if (currentImgIndex > images.length - 1) { 
        currentImgIndex = 0;
    }
    changeImage(images[currentImgIndex]);

 }); 

prevSlide.addEventListener("click", () => { 

    currentImgIndex -= 1; 

    if (currentImgIndex < 0) { 
        currentImgIndex = images.length - 1;
    }
    changeImage(images[currentImgIndex]);
});




let circleOne = document.getElementById("img-circle-1"); 

let circleTwo = document.getElementById("img-circle-2"); 

let circleThree = document.getElementById("img-circle-3");

let circleFour = document.getElementById("img-circle-4"); 

let circleFive = document.getElementById("img-circle-5");  

circleOne.addEventListener("click", (e) => { 
    console.log("circle one"); 

    let img1 = document.getElementById("img1-throw"); 

    changeImage(img1); 

    // img1.classList.add("img-circles:active");
    currentSelectedImg = img1

    console.log(img1); 

    // clickedCircle = true;

})

circleTwo.addEventListener("click", (e) => { 
    console.log("circle two");

    let img2 = document.getElementById("img2-throw"); 

    changeImage(img2); 

    // clickedCircle = true;

}) 

circleThree.addEventListener("click", () => { 
    console.log("circle three"); 

    let img3 = document.getElementById("img3-pin"); 

    changeImage(img3); 

    // clickedCircle = true;

}) 


circleFour.addEventListener("click", () => {
    console.log("circle four"); 

    let img4 = document.getElementById("img4-gripping");

    changeImage(img4); 

    // clickedCircle = true;
}) 

circleFive.addEventListener("click", () => {
    console.log("circle five");

    let img5 = document.getElementById("img5-armbar"); 

    changeImage(img5); 

    // clickedCircle = true;

})  


function autoAdvanceSlide() { 
    setInterval(function() { 

        currentImgIndex += 1; 

    if (currentImgIndex > images.length - 1) { 
        currentImgIndex = 0;
    }
    changeImage(images[currentImgIndex]);


    }, 5000);
} 
autoAdvanceSlide();















// I thought the logic would be exactly the same as the adv slide btn? 

// pen attached, and code block 

// gameplan, 

// try to get the slides advancing forward, 

// if slides advance forward make sure the arrow btns are working as well 

// like advance slides forward then use navigation btns, 

// it should still all go in the same order, 

// then once that is fixed the previous btn logic, 

// advancing slides forward, 

// you are currently passing the currently selected project variable, 

// and it's 0 index, 

//  currentImgIndex = Array.from(imgSlider.querySelectorAll("img"));  

// that grabs all the images within the img frame 

// changeImage(currentImgIndex[0]);

// you pass an image the first image in the array 


// show a different picture in a container 

// 



// // DOM references: next and prev, image container, current image's index,
// //  array of images, and array of image buttons.
// let advanceSlide = document.getElementById('nextSlide'); 
// let prevSlide = document.getElementById('prevSlide');
// let imgSlider = document.getElementById('image-slide');
// let currentImgIndex=0;
// let images = [...imgSlider.querySelectorAll("img")];
// let buttons = [...document.querySelectorAll(".container-for-img-circles .img-circles")]

// // Utility function. This will be called by next, prev and each of the button
// //  handlers
// function changeImage(img) {
//   const imageIndex = images.indexOf(img);
//    images.forEach((image, index) => {
//      if(image !== img){
//        image.classList.remove("current");     
//      } else {
//        image.classList.add("current")   
//      }
//      image.style.left = `${((index-imageIndex)*30)+30}%`
//    })
// } 

// // Next button handler. All we're doing is incrementing the index, and then
// //  setting it back to zero if we reach the last one.
// // And then we tell changeImage to do its thing.
// function next(){
//   currentImgIndex = (currentImgIndex+1)%images.length;
//   changeImage(images[currentImgIndex]);
// }

// // prev button handler. All we're doing is decrementing the index, and then
// //  setting it to the last one if we reach zero.
// // And then we tell changeImage to do its thing.
// function prev(){
//   currentImgIndex = currentImgIndex === 0 ? images.length-1 : currentImgIndex - 1;
//   changeImage(images[currentImgIndex]);
// }

// // Each button has an index - and they're the same index as the image in the images
// //  array. So with that, we can set `currentImgIndex` directly to that, and call
// //  changeImage with the current image.
// buttons.forEach((button, index)=>{
//   button.addEventListener("click", (e)=>{
//     currentImgIndex = index;
//     changeImage(images[currentImgIndex])
//   })
// })

// // Hook up the listeners for prev and next
// advanceSlide.addEventListener("click", next);
// prevSlide.addEventListener("click", prev);





























// gpt response 5/10/23 

// let advanceSlide = document.getElementById('nextSlide');
// let prevSlide = document.getElementById('prevSlide');
// let imgSlider = document.getElementById('image-slide');
// let currentImg = document.getElementsByClassName("current");
// let currentImgArr = Array.from(currentImg);
// let currentIndex = 0;

// advanceSlide.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % currentImgArr.length;
//   changeImage(currentImgArr[currentIndex]);
// });

// prevSlide.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + currentImgArr.length) % currentImgArr.length;
//   changeImage(currentImgArr[currentIndex]);
// });

// function changeImage(img) {
//   imgSlider.innerHTML = '';
//   imgSlider.appendChild(img);
// }










// I have the logic down, to where the circles will correspond to a certain img 

// how can I get the arrow buttons working, so they advance to the next slide 

// gameplan, 

// event listeners wil be needed, 

// change which picture is displayed in the frame, move the container? 

// I don't think I Need any transitions or animations, 

// similar to the logic as before with the circles, 

// button is pressed, the next img in the order will be set, 

// move the image slider? how? 

// change it's position? but how do I change the position? 

// why cant I apply the same logic as the cirles? 

// btn is clicked, display the next img in line? how? 

// move the image frame? the container that the imgs are in? 

// build a function which can advance to the next picture, 

// can you use a loop, and take in the img after the current and just append that? 

// current picture variable, incremenet if the btn is pressed? 

// I'm not sure how to set a current picture variable, 

// you just grab the imgs and then append them to slider if that circle is clicked, 

// how can I advance to the next slide based on btn click? 

// some kind of function, that has the img slider/frame within it, 

// and if clicked, it will advance to what is next, 

// add imgs to some type of array? 


















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