const removeMatch = match => (match[1].toLowerCase() === match[0].toLowerCase()) ? '' : match;

function removeAntiUnits(input) {
  const lowerFirst = new RegExp(/([a-z][A-Z])/, 'g');
  const upperFirst = new RegExp(/([A-Z][a-z])/, 'g');
  let length = input.length;
  let beforeLength;
  
  do {
    beforeLength = length;
    input = input.replace(lowerFirst, removeMatch);
    input = input.replace(upperFirst, removeMatch);
    length = input.length;
  }
  while (beforeLength !== length);
  
  return length;
}

module.exports = removeAntiUnits;