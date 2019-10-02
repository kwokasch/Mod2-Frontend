const searchParams = new URLSearchParams(window.location.search)
const query = searchParams.get('id')
const body = document.body

function genreList(genres){   
    let genreList = document.createElement('ul')
    genres = JSON.parse(genres)

    genres.forEach(genre => {
        let li = document.createElement('li')
        li.innerText = `${genre}`
        genreList.append(li)
    })
    return genreList
}
 
function createCards(artists){
    let cardSection = document.getElementById('artist-cards')
    
    artists.forEach(artist => {
        let div2 = document.createElement('div')
        let genres = artist.genre
        div2.className = 'artist-card'
        console.log(artist)
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        
        p.append(genreList(artist.genre))

        p.className = 'artist-genre-list'

        h3.innerText = artist.name 
        
        div2.append(h3, p)
        cardSection.append(div2)
    })
    
    body.appendChild(cardSection)
}


fetch(`http://localhost:3000/artists`)
    .then(response => response.json())
    .then(createCards)
    .then(genreList)
    

