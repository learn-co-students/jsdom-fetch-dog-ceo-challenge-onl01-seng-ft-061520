console.log('%c HI', 'color: firebrick')

fetch('https://dog.ceo/api/breeds/image/random/4')
 .then(resp => resp.json())
 .then(json => console.log(json));