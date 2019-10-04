let albumsArray = []

const albumSearchParams = new URLSearchParams(window.location.search)
const albumQuery = albumSearchParams.get('id')
const albumBody = document.body
const albumCards = document.getElementById('album-cards')

function albumList(firstThreeSongs){
    let albumList = document.createElement('ul')
    
    firstThreeSongs.forEach(item => {
        let li = document.createElement('li')
        li.innerText = `${item}`
        albumList.append(li)
    })
 
    return albumList
}

function createAlbumCards(albums){
    
    albums.forEach(album => {
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        let div4 = document.createElement('div')
        let div5 = document.createElement('div')
      
        div2.className = 'album-card'
        div3.className = 'album-info'
        div4.className = 'image-box'
        div5.className = 'album-info-background'

        let h3 = document.createElement('h3')
        let label1 = document.createElement('h4')
        let p1 = document.createElement('p')
        let label2 = document.createElement('h4')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let img = document.createElement('img')
       
        let musicians = JSON.parse(album.musicians)
        p1.innerText = musicians
        label1.innerText = "Artists:"
        
        let songs = JSON.parse(album.songs)
        let firstThreeSongs = songs.slice(0,3)
        
        p2.append(albumList(firstThreeSongs))
        p2.append("More...")
        
        p2.className = 'album-song-list' 
        label2.innerText = "Tracks:"

        img.src = album.image
      
        h3.innerText = album.name.toUpperCase() 
        albumsArray.push(album) 
        allArtistAlbums.push(album)
        
        div4.append(img)
        div3.append(div5, h3, label1, p1, label2, p2, p3)
        div2.append(div4, div3)
        albumCards.append(div2)
    })
    
    albumBody.append(albumCards)
}

const albumButton = document.getElementById('albums-button')
albumButton.addEventListener("click", () => {
    artistCards.innerHTML = ''
    albumCards.innerHTML = ''
    retrieveAlbums() 
})

function retrieveAlbums () {
    fetch(`http://localhost:3000/albums`)
        .then(response => response.json())
        .then(createAlbumCards)
    }
retrieveAlbums()