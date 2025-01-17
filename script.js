// Part 1: JavaScript Functions

// Function with parameters and return values
function calculateArea(length, width) {
    return length * width;
  }
  
  // Function to demonstrate scope (local vs. global)
  let globalVar = "I am global";
  
  function demoScope() {
    let localVar = "I am local";
    console.log(localVar); // Local variable is accessible here
    console.log(globalVar); // Global variable is accessible here
  }
  
  demoScope(); // Local variable works here
  
  // Function to toggle the modal visibility (shows/hides the modal)
  function toggleModal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
  }
  
  // Button to trigger modal toggle
  document.getElementById("toggleModalBtn").addEventListener("click", toggleModal);
  
  // Part 3: Combining CSS Animations with JS
  
  // Function to trigger animation on an element
  function triggerAnimation() {
    const element = document.getElementById("animatedElement");
    element.classList.remove("animate"); // Remove the animation class to reset
    void element.offsetWidth; // Trigger reflow (this forces the browser to re-render)
    element.classList.add("animate"); // Add the class to start the animation
  }
  
  // Button click to trigger the animation
  document.getElementById("triggerAnimationBtn").addEventListener("click", triggerAnimation);
  