console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
  fetchContent();
  fetchBreeds();
})

function fetchContent() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images => {
    console.log(images) 
    renderImages(images.message)
  })
}

function renderImages(images) {
  const div = document.getElementById("dog-image-container")
  images.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    img.alt = "Dog Image"
    div.appendChild(img)
  })
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => {
    console.log(breeds) 
    renderBreeds(breeds.message)
  })
}

function renderBreeds(breeds) {
  let ul = document.getElementById('dog-breeds');
  breeds.forEach(breed => {
    let li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)
    li().addEventListener('click', greenText)
  })
}

let li = () => document.querySelector('li')

function greenText() {
  li().style.color = 'green'
}
