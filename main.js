
// // event listeners for buttons, 

let advanceSlide = document.getElementById('nextSlide'); 

let prevSlide = document.getElementById('prevSlide');

let imgSlider = document.getElementById('image-slide');

let navigationDots = [...document.getElementsByClassName("img-circles")]; 

// let navigationCircleBtns = document.getElementsByClassName("img-circles")[0];

let intervalID;

let images = [...imgSlider.querySelectorAll("img")];

let currentImgIndex = 0;

fillCircle();

function changeImage(img) {
    images.forEach(image => image.classList.remove("current"));
    img.classList.add("current"); 


    fillCircle();
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

    
    currentImgIndex = 0;
    
    clearInterval(intervalID); 
    
    autoAdvanceSlide(); 
    
    changeImage(img1);
    // e.target.classList.add("img-circles.active");

})

circleTwo.addEventListener("click", (e) => { 
    console.log("circle two");

    let img2 = document.getElementById("img2-throw"); 

    
    currentImgIndex = 1;
    
    clearInterval(intervalID); 
    
    autoAdvanceSlide();
    
    changeImage(img2);
    // e.target.classList.add("img-circles.active");

}) 

circleThree.addEventListener("click", (e) => { 
    console.log("circle three"); 

    let img3 = document.getElementById("img3-pin"); 

    
    currentImgIndex = 2;
    
    clearInterval(intervalID); 
    
    autoAdvanceSlide(); 
    
    changeImage(img3); 
    // e.target.classList.add("img-circles.active");

}) 


circleFour.addEventListener("click", (e) => {
    console.log("circle four"); 

    let img4 = document.getElementById("img4-gripping");

    
    currentImgIndex = 3;
    
    clearInterval(intervalID); 
    
    autoAdvanceSlide(); 
    
    changeImage(img4); 
    // e.target.classList.add("img-circles.active");
}) 

circleFive.addEventListener("click", (e) => {
    console.log("circle five");

    let img5 = document.getElementById("img5-armbar"); 
    
    currentImgIndex = 4;
    
    clearInterval(intervalID);
    
    autoAdvanceSlide();
    
    changeImage(img5); 
    // e.target.classList.add("img-circles.active");

})  



function autoAdvanceSlide() { 
       intervalID = setInterval(function () { 

        currentImgIndex += 1; 
        
        if (currentImgIndex > images.length - 1) { 

            currentImgIndex = 0;
        }
        changeImage(images[currentImgIndex]);

        // fillCircle(currentImgIndex);
        
    }, 5000);
}

autoAdvanceSlide(); 


console.log(currentImgIndex[0]);

function fillCircle() { 
    // let currentCircleIndex = index; 

    // console.log(currentCircleIndex); 

    for (let i = 0; i < navigationDots.length; i++) { 
        let dot = navigationDots[i];
        

        dot.classList.toggle('img-circles-current', currentImgIndex === i);
    }

    // navigationDots.classList.add('img-circles-current', currentImgIndex);

}


// currently it is filling in all dots, 

// how can I change my logic, to fill in the dot 

// with the correct index, 




// hello on the last step of the image slider, 

// right now I just want navigation dots to fill in with color, 

// when the user is on that particular index, 

// if I'm on the first slide, circle 1 should be colored in. 

// I'm a little stuck 

// but I made a function that loops through all the navigation dots, 


// and applies an :active class to them, 



// not inside the event listener that the class should be applied, 

// but possibly within the auto advance function, 

// the class should indicate where the user is in the show, 


// fill the circles based on where you are in the slideshow, 

// check out the change image function, because 

// classes are already being added, and removed , 

// so you would need to add a class, like circle filled, 

// to the currentIndex. 












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