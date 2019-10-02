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
       
        p1.innerText = artist.followers
        label1.innerText = "Followers:"
        
        p2.append(genreList(artist.genre))
        p2.className = 'artist-genre-list' 
        label2.innerText = "Genres:"

        img.src = artist.image
      
        h3.innerText = artist.name 
        
        div4.append(img)
        div3.append(div5, h3, label1, p1, label2, p2, p3)
        div2.append(div4, div3)
        cardSection.append(div2)
    })
    
    body.appendChild(cardSection)
}


fetch(`http://localhost:3000/artists`)
    .then(response => response.json())
    .then(createCards)
    .then(genreList)
    

