console.log('***** Music Collection *****')
let collection = [];
   function addToCollection(title, artist, yearPublished) {
   let newObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
   }
   return collection.push(newObject);
}
addToCollection('The Divine Feminine','Mac Miller',2016);
addToCollection('Bobby Tarantino ||','Logic',2018);
addToCollection('Positions','Ariana Grande',2020);
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