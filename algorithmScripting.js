// Reverse the provided string
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

// Return the factorial of the provided integer using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);
}
factorialize(5);

