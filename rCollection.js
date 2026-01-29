const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records,id,prop,value){
  /*If value is an empty string, delete the given prop property from the album.*/
  if(value=""){
    delete records[id][prop];
  }
  /*If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.  */

if(prop==="tracks"&&value!==""){
  records[id][prop]=value;
}
/* If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it. */



}
