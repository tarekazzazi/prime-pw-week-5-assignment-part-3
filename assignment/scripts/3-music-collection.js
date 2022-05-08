console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, name, duration) {

    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: { name: name, duration: duration }
    }
    collection.push(newAlbum); //Adds a newAlbum to the collection array

    return newAlbum; // returns new album
}


addToCollection('The Divine Feminine', 'Mac Miller', 2016, 'Congratulations', '4:16');

addToCollection('Circles', 'Mac Miller', 2020,);

addToCollection('Bobby Tarantino ||', 'Logic', 2018, 'Warm It Up', '4:00');

addToCollection('Positions', 'Ariana Grande', 2020, '34+35', '2:30');

addToCollection('Future Nostalgia', 'Dua Lipa', 2020);

addToCollection('Tickets To My Downfall', 'MGK', 2020);

addToCollection('Happier Than Ever', 'Billie Eilish', 2021);


console.log(collection[0]);

console.log(collection[1]);

console.log(collection[2]);

console.log(collection[3]);

console.log(collection[4]);

console.log(collection[5]);

console.log(collection);

function showCollection(array) {

    console.log('In showCollection');

    console.log('There are:', array.length, 'albums in your collection');

    for (let i = 0; i < array.length; i++) {

        console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
    }
    return true;
}

showCollection(collection);

// results changed from global variable

function findByArtist(artist) {

    //to local variable 

    let results = [];

    for (newAlbum of collection) {

        if (newAlbum.artist === artist) {

            results.push(newAlbum);
        } else {
            //do nothing
        }
    }
    return results;
}


findByArtist('Billie Eilish');

let searchResults = [];

function search(artist, yearPublished, trackName) {

    // searches for artist, yearPublished and trackname

    for (album of collection)

        //searches for every album in the collection array

        if (album.artist === artist && album.yearPublished === yearPublished || trackName === album.tracks) {

            //Checks to see if the artist and album entered match with one of the albums in the collection   

            searchResults.push(album);

            // if artist and album do match then it adds the album to the searchResults Array

            return searchResults;
        }
    return collection; // if they don't match then the whole collection of albums is returned
}
/* Attempt at adding tracks

const getNestedObject = (nestedObj, pathArr) =>{
    return pathArr.reduce((obj, key) => 
        (obj && obj[key] !== 'undefined' ? obj[key] : undefined, nestedObj));
    
} 

const name = getNestedObject(newAlbum, ['tracks', 0,'name']); */



