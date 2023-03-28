function sqrt(number) {
  return sqrt_recursive(number, 0, number);
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let middle = Math.floor((min_interval + max_interval) / 2);
  if (middle * middle === number) {
    return middle;
  }
  if (middle * middle < number) {
    return sqrt_recursive(number, middle + 1, max_interval);
  }
  return sqrt_recursive(number, min_interval, middle - 1);
}

console.log(sqrt(25));
console.log(sqrt(7056));

module.exports = sqrt;
