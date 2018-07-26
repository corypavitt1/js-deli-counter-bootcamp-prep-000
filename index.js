
var katzDeli = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return (`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return (`There is nobody waiting to be served!`)
  } else {return (`Currently serving ${katzDeliLine.shift()}.`)}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >=1) {
    var newArray = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      newArray.push(`${i+1}. ${katzDeliLine[i]}`)
    } return (`The line is currently: ${newArray.join(', ')}`)
  } else {return'The line is currently empty.'}
}
