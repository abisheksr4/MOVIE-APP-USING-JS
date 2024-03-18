// https://www.omdbapi.com/?apikey=cab080e&t=leo

// fetch('https://www.omdbapi.com/?apikey=cab080e&t=leo').then((data)=>{
//     console.log(data)
// })

let api="https://www.omdbapi.com/?apikey=cab080e&t="


let title=document.getElementById('title')
let ratings=document.getElementById('ratings')
let director=document.getElementById('director')
let writer=document.getElementById('writer')
let genre=document.getElementById('genre')
let description=document.getElementById('description')
let awards=document.getElementById('awards')
let collections=document.getElementById('collections')
let date=document.getElementById('date')
let poster=document.getElementById('poster')

function searchmovie(){
    let moviename=document.getElementById('moviename')
    let query = api+moviename.value
    fetch(query).then((data)=>{
        return data.json()      /*converting the data i got into json value*/
    }).then((data)=>{
        title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        awards.innerText = data.Awards;
        actors.innerText = data.Actors;
        desc.innerText = data.Plot;
        collection.innerText = data.BoxOffice;
        ratings.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        writer.innerText = data.Writer;
        poster.src = data.Poster;
    })
}

