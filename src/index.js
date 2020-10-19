module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let arrOfBrackets = bracketsConfig.reduce( (acc, el) => acc.concat(el), []);
  for (let i = 0; i < str.length; i++) {
    let indexOfOpenBracket = arrOfBrackets.indexOf(str[i]);
    if (arr.includes(str[i]) && str[i] === arr[arr.length-1]) {
     arr.pop();
    } else {
      arr.push(arrOfBrackets[indexOfOpenBracket + 1]);
    }
  }
  return arr.length == 0;
}
