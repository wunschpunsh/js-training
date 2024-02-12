const validateStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const formattedString = string.toLowerCase().replace(/ /g, '');
  const formattedReverseString = formattedString.split('').reverse().join('');
  return formattedString === formattedReverseString;
};

const getPositiveInteger = (string) => {
  const numArray = [];
  const formattedString = string.toString().replaceAll(' ', '');
  for(let i = 0; i <= formattedString.length; i++) {
    const number = parseInt(formattedString[i], 10);
    if (!Number.isNaN(number)) {
      numArray.push(number);
    }
  }

  return parseInt(numArray.join(''), 10);
};
