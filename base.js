function randomize(limit){
  var a = Math.pow(10, String(limit).length); 
  var readyNumber = Math.floor(Math.random()*a);
  if(readyNumber>=limit){
    return randomize(limit);
  } else {
    return readyNumber;
  }
}
