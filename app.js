let artistsArray = []
let allArtistAlbums = []

const artistSearchParams = new URLSearchParams(window.location.search)
const artistQuery = artistSearchParams.get('id')
const artistBody = document.body
const artistCards = document.getElementById('artist-cards')

function genreList(genres){   
    let artistList = document.createElement('ul')
    genres = JSON.parse(genres)
    
    selectedGenres = []
    selectedGenres.push(genres[0])
    selectedGenres.push(genres[1])
    selectedGenres.push(genres[2])
    // return selectedGenres

    selectedGenres.forEach(item => {
        let li = document.createElement('li')
        if (item === undefined) {
            li.innerText = ' '
        } else {
        li.innerText = `${item}`
        }
        artistList.append(li)
    })

    return artistList
}

function createArtistCards(artists){
       artists.forEach(artist => {
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        let div4 = document.createElement('div')
        let div5 = document.createElement('div')
      
        div2.className = 'artist-card'
        div3.className = 'artist-info'
        div4.className = 'image-box'
        div5.className = 'artist-info-background'

        let h3 = document.createElement('h3')
        let label1 = document.createElement('h4')
        let p1 = document.createElement('p')
        let label2 = document.createElement('h4')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let img = document.createElement('img')
       
        p1.innerText = artist.followers.toLocaleString('en')
        label1.innerText = "Followers:"
        
        p2.append(genreList(artist.genre))
        p2.className = 'artist-genre-list' 
        label2.innerText = "Genres:"

        img.src = artist.image
      
        h3.innerText = artist.name.toUpperCase() 
        artistsArray.push(artist) 
        allArtistAlbums.push(artist)
        
        div4.append(img)
        div3.append(div5, h3, label1, p1, label2, p2, p3)
        div2.append(div4, div3)
        artistCards.append(div2)
    })
    
    artistBody.append(artistCards)
}

const button = document.getElementById('artist-button')
button.addEventListener("click", () => {
    albumCards.innerHTML = ''
    artistCards.innerHTML = ''
    retrieveArtists() 
})

const allButton = document.getElementById('all')
allButton.addEventListener("click", () => {
    albumCards.innerHTML = ''
    artistCards.innerHTML = ''
    retrieveArtists()
    retrieveAlbums() 
})

function retrieveArtists (){
    fetch(`http://localhost:3000/artists`)
    .then(response => response.json())
    .then(createArtistCards)
}

retrieveArtists()



const artistAlbumFilter = document.getElementById('album-search')
    artistAlbumFilter.addEventListener("submit", (event) => {
        event.preventDefault()
        let newAlbumsArray = []
        let input = document.getElementById('albums').value
        albumsArray.forEach(album => {
            let musicians = album.musicians
            let musicians2 = JSON.parse(musicians)
            let eachMusician = musicians2[0]
            console.log(input)
            console.log(eachMusician.toLowerCase())
            if (eachMusician.toLowerCase().includes(input.toLowerCase()))
                newAlbumsArray.push(album)
        })
        albumCards.innerHTML = ''
        artistCards.innerHTML = ''
        createAlbumCards(newAlbumsArray)
    })


// const zoom = document.querySelector('.artist-card')
// zoom.addEventListener("click", () =>{
//     let zoomBox = document.createElement('div')
//     zoomBox.className = "zoom-box"
//     zoomBox.appendChild(zoom)
// })

// let filteredArtistAlbums = []

// const nameFilter = document.getElementById('filter')
// nameFilter.addEventListener("submit", (event) => {
//     event.preventDefault()
//     filterByName()
// })

// function filterByName(){
//     let input = document.getElementById('search-box').value.toLowerCase()
    
//     let artistAlbums = allArtistAlbums

//     function isName(artistAlbum) {
//         artistAlbum["name"].toLowerCase().includes(input)
//     }

//     filteredArtistAlbums = artistAlbums.filter(isName)
//     console.log(filteredArtistAlbums)
//     return filteredArtistAlbums
// }
