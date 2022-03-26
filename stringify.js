// Implement customs stringify function which will take an input and convert it to the string.

// Inputs => Outputs
// 'abc' => ‘abc’
// ['abc', 'def'] => '[abc, def]'
// ['abc', ['def', 'nlm', ['xyz']]] => '[abc, [def, nlm, [xyz]]]'

function customStringify(input) {
  if (typeof input === 'string') return str;

  let str = '[';

  for (var i = 0; i < input.length; i++) {
    const currentValue = input[i];
    if (typeof currentValue === 'string') {
      str += `${currentValue}${i < input.length - 1 ? ',' : ''}`;
    } else {
      str += customStringify(currentValue);
    }
  }
  str += ']';
  return str;
}
customStringify(['abc', ['def', 'nlm', ['xyz']]]);
