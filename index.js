function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = `Welcome ${names[i]}! You are employee #${i+1}.`;
    console.log(names[i]);
  }
  return names
}

function tailsNeverFails () {
  let x = true
  let t = 0
  let f = 0 
  while (x) {
    t = Math.random()
    if (t < 0.5) {
      x = false
    }
    else {
      f = f + 1
    }
  }
  return `You got ${f} tails in a row!`
}