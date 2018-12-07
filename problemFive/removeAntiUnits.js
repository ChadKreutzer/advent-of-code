function removeAntiUnits(input) {
  const regex = new RegExp(/(.)\1{1}/, 'gi');
  let length = input.length;
  let beforeLength;
  
  do {
    beforeLength = length;
    input = input.replace(regex, match => (match[1] !== match[0]) ? '' : match);
    length = input.length;
  }
  while (beforeLength !== length);
  
  return input.length;
}

module.exports = removeAntiUnits;