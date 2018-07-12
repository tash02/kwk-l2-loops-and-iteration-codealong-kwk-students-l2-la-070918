function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = `Welcome ${names[i]}! You are employee #${i+1}.`;
    console.log(names[i]);
  }
  return names
}

function tailsNeverFails () {
  var count = 0
  var tails = 0
  var heads = 1 
  var randomNumbers = Math.random()
}
  while (randomNumbers[count] != 1) {
    count++;
    randomNumbers.push(pcNum());
}