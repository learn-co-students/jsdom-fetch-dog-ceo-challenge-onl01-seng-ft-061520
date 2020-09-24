console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  fetchDogs();
  fetchBreed();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ul = document.getElementById("dog-breeds");
const dogContainer = document.getElementById("dog-image-container");

function fetchDogs() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((resp) => {
      resp.message.forEach((dog) => renderDog(dog));
    });
}

function renderDog(dog) {
  // add image elements to the DOM for each image in the array
  // add images to dogImage div

  dogContainer.innerHTML += `<div><img src=${dog} alt="DOG"/></div>`;
}

function fetchBreed() {
  //fetch all the dog breeds using url
  fetch(breedUrl)
    .then((response) => response.json())
    .then((resp) => {
      for (const breed in resp.message) {
        displayBreed(breed);
        breeds.push(breed);
      }
    });
}

function displayBreed(breed) {
  // add breeds to page in a ul ; appendchild li??
  const li = document.createElement("LI");
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener("click", () => {
    li.style.color = "blue";
  });
}
// safer to do it manually if you can't trust the API/ users being
//able to access - put input into a form
//ul.innerHTML += `<li>${breed}</li>`;

// Once all of the breeds are rendered in the <ul>, add JavaScript so that
//the font color of a particular <li> changes on click. This can be a color of
//your choosing.

//Once we are able to load all of the dog breeds onto the page, add JavaScript
//so that the user can filter breeds that start with a particular letter using a dropdown.

let breeds = [];

const breedDropdown = document.getElementById("breed-dropdown");
breedDropdown.addEventListener("change", (e) => {
  console.log(breeds);
  ul.innerHTML = "";
  const filtered = breeds.filter((breed) => {
    return breed[0].toLowerCase() == e.target.value;
  });

  filtered.forEach((breed) => {
    displayBreed(breed);
  });
});

// breedDropdown.addEventListener("change", () => {
//   ul.innerHTML = "";
//   breeds
//     .filter((b) => b.toLowerCase() == e.target.value)
//     .forEach((b) => {
//       displayBreed(b);
//     });
// });
