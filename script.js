const text = "Sample message";
const jokeElement = document.getElementById('element');

setTimeout(() => {
  jokeElement.innerHTML = text;
}, [3000])