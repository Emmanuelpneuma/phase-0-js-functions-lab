function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
