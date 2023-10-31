function checkEven(num) {
  return num % 2 === 0;
}

function checkPalindrome(str) {
  if (typeof str !== "string") {
    throw new Error("Param should be a string");
  }
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkEven,
  checkPalindrome,
};
