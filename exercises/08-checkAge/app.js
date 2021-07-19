function checkAge(name, age) {
  // your code here
  let message = '';
  if (age < 21) {
    message = `Go home, ${name}!`
  } else {
    message = `Welcome, ${name}!`
  }
  return message;
}

console.log(checkAge('James', 22));