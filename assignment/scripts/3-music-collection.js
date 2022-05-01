console.log('***** Music Collection *****')

let collection = [];
   
function addToCollection(title, artist, yearPublished, name, duration) {
   let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: { name: name, duration: duration }
   }
   return collection.push(newAlbum);
}


addToCollection('The Divine Feminine','Mac Miller',2016,'Congratulations','4:16');

addToCollection('Bobby Tarantino ||','Logic',2018,'Warm It Up','4:00');

addToCollection('Positions','Ariana Grande',2020,'34+35','2:30');

addToCollection('Future Nostalgia','Dua Lipa',2020);

addToCollection('Tickets To My Downfall','MGK',2020)

addToCollection('Happier Than Ever','Billie Eilish',2021);


console.log(collection[0]);

console.log(collection[1]);

console.log(collection[2]);

console.log(collection[3]);

console.log(collection[4]);

console.log(collection[5]);

console.log(collection);

    function showCollection(array) {
        console.log('In showCollection');
        console.log('There are:', array.length,'albums in your collection');

        for (let i=0; i<array.length; i++) {
            console.log(array[i].title,'by',array[i].artist,'published in',array[i].yearPublished);
        }
        return true;
    }

    showCollection(collection);


    let results = [];

    function findByArtist(artist) {
        for (result of collection) {
            if (artist === result.artist) {
                results.push(result);
                return false;
            }else{
                results.pop();
                console.log('searching...');
            }
        }
        return results;
        }  
        

findByArtist(  'Billie Eilish'  );

let searchResults = [];
  
function search (artist,yearPublished,trackName) {
            for (album of collection)
            if (album.artist === artist && album.yearPublished === yearPublished || trackName === album.tracks) {
                searchResults.push(album);
                return searchResults;
            }
            return collection;
        }
/* Attempt at adding tracks

const getNestedObject = (nestedObj, pathArr) =>{
    return pathArr.reduce((obj, key) => 
        (obj && obj[key] !== 'undefined' ? obj[key] : undefined, nestedObj));
    
} 

const name = getNestedObject(newAlbum, ['tracks', 0,'name']); */



       