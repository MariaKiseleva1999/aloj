console.log('Здравствуй,Мир!');
const userText= prompt ('Введите текст');
const userTextField = document.querySelector('h2');
userTextField.textContent = userText;
console.log('Текст в блоке с id userTextField изменён на', userText);

