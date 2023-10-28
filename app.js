
let textElement = document.querySelector('h1');

let text = "hello world!";

let count = 0

let intervalID = setInterval(() => {
    textElement.innerText += text.charAt(count)
    if (count === text.length) {
        console.log('The End')
        clearInterval(intervalID) 
        return
      }
      count++
    

}, 600)

