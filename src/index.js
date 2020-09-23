console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderPics(json));
}

function fetchBreeds() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(Object.keys(json["message"])));
}

function renderPics(dogs) {
  const images = document.querySelector("#dog-image-container")
  dogs["message"].forEach(dog => {
    const img = document.createElement('IMG');
    img.src = dog;
    images.appendChild(img);
  })
}

function renderBreeds(dogs) {
  const breeds = document.querySelector("#dog-breeds")
  dogs.forEach(dog => {
    const li = document.createElement('li');
    li.innerHTML = dog;
    li.id = dog;
    li.addEventListener("click", (e) => {
      li.style.color = "green";
    })
    breeds.appendChild(li);
  })
}


document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})
