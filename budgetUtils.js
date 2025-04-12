function calculateTax(amount) {
    return amount * 0.10;
  }
  
  function convertToUpperCase(text) {
    return text.toUpperCase();
  }
  
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
  
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
  }
  
  module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
  };
  