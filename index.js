document.addEventListener("DOContentLoaded", () => {
    //allBreeds is a variable for the dog breeds so  we don't have to 
    //each time we need data
    let allBreeds = []

    //api endpoints 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    //dom nodes for attaching event listner
    const dogImgContainer = document.querySelector('#dog-img-container')
    const dogBreedUrl = document.querySelector('dog-breeds')
    const breedDropdown = document.querySelector('breed-dropdown')

    //listen for clicks on the li
    dogBreedUrl.addEventListener('click', (e) => {
        //event.target will be the node that was clicked
        e.target.style.color = 'red'
    })
    breedDropdown.addEventListener('change', (e) => {
        //'a', 'b','c', or 'd'
        const letter = e.target.value

        //filter out the dogs whose names don't match the selected letter 
        const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(letter))

        //selt the innerHTML of the unorderd lis tusing our render helper
        dogBreedUrl.innerHTML = vreatedDogList(filteredBreeds)

        //fetch will default to sending an HTTP GET request 
        fetch(imgUrl, { method: 'Get' })
            //the inital fetch returns a promise with a response object inside of it
            .then((response) => {
                console.log(response)
                    //.then takes a callback and passes the return val from the previous 
                    //promise to it 
                if (response.ok) {
                    //if the HTTP status code is < 400 response.json() return another promise
                    //the only way to ger the value is with another .then
                    return response.json() //return the parsed json as a promise
                }
            })
            .then((dogImgData) => {
                //console.logIdogImgData) //parsed from our previous .then
                dogImgData.message.forEach(function(imgUrl) {
                    dogImgData.innerHTML += `<img src="${imgUrl}">`
                })
                const dogImgString = dogImgData.message.map((imgUrl) => {
                    return `<img src="${imgUrl}">`
                })
            })

        fetch(breedUrl, { method: 'GET' })
            .then((resp) => resp.json())

        .then((breedData) => {
            allBreeds = Object.keys(breedData.message)
            console.log(allBreeds)
            dogBreedUrl.innerHTML = createDogList(allBreeds)
        })
    })

    function createDogList(dogsBreedArray) {
        const dogLiStringArray = dogsBreedArray.map(function(breed) {
            return `<li>${breed}</li>`

        })
        return dogLiStringArray.json('')
    }
})