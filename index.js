var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
    for (let i = 0; i < katzDeliLine.length; i++)

    if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`

      } else { (katzDeliLine.length < 1 )

      }
    return "There is nobody waiting to be served!"
  };

function currentLine(katzDeliLine) {
    if(katzDeliLine.length < 1 ) {
    return "The line is currently empty."

  //  var numbersNames = []

  } else {
    for(let i = 0; i < katzDeliLine.length; i ++) {
    //([initialization]; [condition]; [iteration])
    //[loopBody] block of code to be executed loops
    placesNames.push(`${}. ${}`)
    }


 }
