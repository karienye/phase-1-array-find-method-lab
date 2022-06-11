// code your solution here
/*function superbowlWin(record, finder){
    let result;
    for (let year of record){
        if (finder(year)=== true){
            result = year;
            break;
        }
        return result;
    }
    else if (finder())
}
*/
function superbowlWin(collection) {
    const record = collection.find 
    (collection => collection.result === 'W');
    return record?record.year:undefined;
    }

/* function superbowlWin  (collection) {

    for (const record of collection) {
        if (record.result === "W") {
      console.log(record.year);
        }
        else(record.result === "N/A"); {
        console.log('2015') }
    }
  }
  superbowlWin(record.year);*/