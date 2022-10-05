// code your solution here

function superbowlWin(collection){
  const res = collection.find(years => years.result === 'W');
  if (res){
    return res.year;
  } else{
    return undefined;
  }
}