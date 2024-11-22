
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Add event listener to Yes button
yesBtn.addEventListener("click", () => {
  question.innerHTML = "of course babes, i know i'm handsome..";
  gif.src = "https://media.tenor.com/u6h1zmm-PFYAAAAi/cartoons.gif";
});

// Add event listener to No button (touch-friendly)
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// Function to move No button randomly
function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure button stays within wrapper
  const maxX = wrapperRect.width - noBtnRect.width - 10; 
  const maxY = wrapperRect.height - noBtnRect.height - 10; 

  // Generate random positions
  const randomX = Math.floor(Math.random() * maxX) + 10; 
  const randomY = Math.floor(Math.random() * maxY) + 10; 

  // Update button position
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}







