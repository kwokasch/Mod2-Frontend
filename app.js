const artistSearchParams = new URLSearchParams(window.location.search)
const artistQuery = artistSearchParams.get('id')
const artistBody = document.body
const artistCards = document.getElementById('artist-cards')

function genreList(genres){   
    let artistList = document.createElement('ul')
    genres = JSON.parse(genres)
    
    return genres[0]
    // genres.forEach(item => {
    //     let li = document.createElement('li')
    //     li.innerText = `${item}`
    //     artistList.append(li)
    // })
    // return artistList
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
        
        div4.append(img)
        div3.append(div5, h3, label1, p1, label2, p2, p3)
        div2.append(div4, div3)
        artistCards.append(div2)
    })
    
    artistBody.append(artistCards)
}

let artists = []

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

const nameFilter = document.getElementById('search')
nameFilter.addEventListener("click", (event) => {
    
    console.log(nameFilter)
})

function retrieveArtists (){
    fetch(`http://localhost:3000/artists`)
        .then(response => response.json())
        .then(createArtistCards)
}
retrieveArtists()

