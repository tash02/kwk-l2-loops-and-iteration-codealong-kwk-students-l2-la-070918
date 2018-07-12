function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = `Welcome ${names[i]}! You are employee #${i+1}.`;
    console.log(names[i]);
  }
  return names
}

function tailsNeverFails () {
  var x = true
  var t = 0
  var f = 0 
  while (x) {
    t = Math.random()
    if (t,0.5) {
      x = false
    }
    else {
      f = f + 1
    }
  } return `You got ${heads} tails in a row`
}