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
    
    for (const record of collection) {
      console.log(record.year);
    }
  }
  
  superbowlWin(record);