const API_KEY = config.API_KEY;
const API_SECRET = config.API_SECRET;

$(document).ready(() => {
    console.log('jQuery is ready to go!');
});

const $container = $('<div>')
.attr('id', 'jokeContainer')
.css({'text-align': 'center', 'font-family': 'Permanent Marker'})

const $picContainer = $('<div>')
.attr('id', 'dadPictureContainer')
.css({'text-align': 'center', 'font-family': 'Permanent Marker'})

const $title = $('<h1>', {
    text: 'Dad Jokes'
})
.css({'color': 'blue', 'margin': '50px'})

$container.append($title)

$(document.body).append($container)
$(document.body).append($picContainer)


const $jokeButton = $('<button>', {
    text: "Click for a joke"
})
.addClass('btn btn-success')
.appendTo($container)
.on('click', event => {
    // console.log('You clicked the button')
    getJoke()
    .then(joke => {
        $('.joke').remove()
        // console.log(joke)
        const $jokeText = $('<p>',{
            text: joke
        })
        .addClass('joke')
        .hide()
        .css({'font-size': '25px', 'margin': '50px'})
        .appendTo($container)
        .fadeIn()
    })
    getDadPic()
    .then(pic => {
        $('.dad').remove()
        let randomPic = getRandomNumber(pic.results.length)
        console.log(pic)
        const $dadPicture = $('<img>', {
            src: pic.results[randomPic].urls.small
        })
        .addClass('dad')
        .appendTo($picContainer)
    })
})

let getJoke = () => {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => {
        return res.joke
    })
    .catch(err => {
        return err
    })
}


let getDadPic = () => {
    return $.ajax({
        url: `https://api.unsplash.com/search/photos?&per_page=20&query=funny-face/`,
        headers: {
           'Accept-Version': 'v1',
           'Authorization': `Client-ID ${API_KEY}`
        }
    })
    .then(res => {
        // console.log(res)
        return res
    })
    .catch(err => {
        return err
    })
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }