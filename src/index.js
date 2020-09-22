console.log('%c HI', 'color: firebrick')
let breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
	}
}

document.addEventListener("DOMContentLoaded", () => {
    //fetch and append images
    fetch(imgUrl)
	.then(resp => resp.json())
	.then(json => {
	    json.message.forEach( e => {
		let div = document.querySelector('#dog-image-container');
		let p = document.createElement('span');
		p.innerHTML = `<img src="${e}" />`;
		div.appendChild(p);
	    });
	});
    
    //fetch and append breeds to list
    fetch(breedUrl)
	.then(resp => resp.json())
	.then(json => {
	    let breedList = document.querySelector('#dog-breeds');
	    Object.keys(json.message).forEach( key => {
		let breed = document.createElement('li');
		breed.innerHTML = `${key}`;
		breeds.push(key); //push breeds onto breeds array so we don't have to fetch the data again
		breedList.appendChild(breed);
		breed.addEventListener('click', function(event){
		    event.target.style.color = 'tomato';
		});
		addBreedDropDownListener();
	    });
	});

    
});

function addBreedDropDownListener(){
    document.querySelector('#breed-dropdown').addEventListener('change', function(event){
	removeAllChildNodes(document.querySelector('#dog-breeds'));
	addSelectedBreeds(document.querySelector('#breed-dropdown').value);
    });
}

function addSelectedBreeds(letter){
    let breedList = document.querySelector('#dog-breeds');
    breeds.forEach( breed => {
	if(breed.startsWith(letter)){
	    let breedListItem = document.createElement('li');
	    breedListItem.innerHTML = `${breed}`;
	    breedList.appendChild(breedListItem);
	    breedListItem.addEventListener('click', function(event){
		event.target.style.color = 'tomato';
	    });
	};
    });
};


