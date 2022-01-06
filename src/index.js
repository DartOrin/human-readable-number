module.exports = function toReadable(number) {
  const textNumbers = {
    ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundred: ' hundred'
  };

  if(number === 0) return 'zero'
  if(number<20) return textNumbers.ones[number]
  if(number<100) {
    let num = +String(number).slice(0, 1)
    let tens = textNumbers.tens[num]
    let subnum = +String(number).slice(1)
    if(subnum!=0) return tens + ' ' + toReadable(subnum)
    return tens
  }
  if(number<1000){
    let num = +String(number).slice(0, 1)
    let hundred = textNumbers.ones[num] + textNumbers.hundred
    let subnum = +String(number).slice(1)
    if(subnum!=0) return hundred + ' ' + toReadable(subnum)
    return hundred
  }
}