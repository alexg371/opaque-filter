/*
defined functions

- getFlagList: simply gets our flaglist.json and returns it as a javascript object
- updateFlagList: writes our updated object to flaglist.json
*/


/* DEFINED FUNCTIONS: */
// load our file w/ contents as starting point in our local variable:
async function getFlagList(archive){

  var ourFlagList = await archive.readFile('/flaglist.json')
  ourFlagList = JSON.parse(ourFlagList)
  
  return ourFlagList;
}

async function updateFlagList(archive, mostcurrentFlagList){
  // archive is our datArchive instance (i.e. dat url)
  // updatedFlagList is the object we want to write into flaglist.json

  console.log(mostcurrentFlagList)
  await archive.writeFile('/flaglist.json', JSON.stringify(mostcurrentFlagList));
}