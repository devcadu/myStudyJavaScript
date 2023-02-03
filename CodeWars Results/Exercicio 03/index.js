//  There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
function betterThanAverage(classPoints, yourPoints) {
  let res = 0;
  for (let i = 0; i < classPoints.length; i++) {
    res = res + classPoints[i]
  }
  let media = res / classPoints.length
  if (media < yourPoints) {
    return true
  }
  else {
    return false
  }
  return res
}
//--------

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`
  }
  else { return `${name} does not play banjo` }
}