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
