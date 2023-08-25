const firstRatings = document.getElementById('rating-button-1');

const secondRatings = document.getElementById('rating-button-2');

const thirdRatings = document.getElementById('rating-button-3');

const fourthRatings = document.getElementById('rating-button-4');

const fifthRatings = document.getElementById('rating-button-5');

firstRatings.addEventListener('click', () => {
  firstRatings.classList.toggle('rating-clicked');
  secondRatings.classList.remove('rating-clicked');
  thirdRatings.classList.remove('rating-clicked');
  fourthRatings.classList.remove('rating-clicked');
  fifthRatings.classList.remove('rating-clicked');
});

secondRatings.addEventListener('click', () => {
  firstRatings.classList.remove('rating-clicked');
  secondRatings.classList.toggle('rating-clicked');
  thirdRatings.classList.remove('rating-clicked');
  fourthRatings.classList.remove('rating-clicked');
  fifthRatings.classList.remove('rating-clicked');
});

thirdRatings.addEventListener('click', () => {
  firstRatings.classList.remove('rating-clicked');
  secondRatings.classList.remove('rating-clicked');
  thirdRatings.classList.toggle('rating-clicked');
  fourthRatings.classList.remove('rating-clicked');
  fifthRatings.classList.remove('rating-clicked');
});

fourthRatings.addEventListener('click', () => {
  firstRatings.classList.remove('rating-clicked');
  secondRatings.classList.remove('rating-clicked');
  thirdRatings.classList.remove('rating-clicked');
  fourthRatings.classList.toggle('rating-clicked');
  fifthRatings.classList.remove('rating-clicked');
});

fifthRatings.addEventListener('click', () => {
  firstRatings.classList.remove('rating-clicked');
  secondRatings.classList.remove('rating-clicked');
  thirdRatings.classList.remove('rating-clicked');
  fourthRatings.classList.remove('rating-clicked');
  fifthRatings.classList.toggle('rating-clicked');
});

const submitButton = document.getElementById('submitButton');
let firstRating = parseInt(firstRatings.innerHTML);
let secondRating = parseInt(secondRatings.innerHTML);
let thirdRating = parseInt(thirdRatings.innerHTML);
let fourthRating = parseInt(fourthRatings.innerHTML);
let fifthRating = parseInt(fifthRatings.innerHTML);

// Define the displayRating function first
const displayRating = () => {
  if (firstRating === 1) {
    rating = 1;
  } else if (secondRating === 2) {
    rating = 2;
  } else if (thirdRating === 3) {
    rating = 3;
  } else if (fourthRating === 4) {
    rating = 4;
  } else if (fifthRating === 5) {
    rating = 5;
  } else {
    rating = 0;
  }
};

submitButton.addEventListener('click', () => {
  let rating = 0;
  displayRating();

  console.log("Rating:", rating);

  const textToDisplay = `You selected ${rating} out of 5`;

  console.log("Text to display:", textToDisplay);

  localStorage.setItem('textToDisplay', textToDisplay);
});








