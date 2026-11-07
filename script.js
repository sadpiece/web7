function sumOrMinus() {
      const len = arguments.length;
      
      if (len === 0) {
        return 0;
      }

      if (len % 2 === 0) {
        let res = 0;
        for (let i = 0; i < len; i++) {
          res += arguments[i];
        }
        return res;
      } 
      else {
        let res = arguments[len - 1]; 
        for (let i = len - 2; i >= 0; i--) {
          res -= arguments[i];
        }
        return res;
      }
    }


const input = prompt("Введіть числа через кому:");

if (input !== null && input.trim() !== "") {
  

  const array = input.split(',').map(item => Number(item.trim()));
  const error = array.some(item => isNaN(item));

  if (error) {
    document.write("<h2>Помилка: некорректний ввід.</h2>");
  } 

  else {

    const result = sumOrMinus(...array);

    document.write("<h2>Обчислення масиву чисел</h2>");
    document.write("<p>Ви ввели: " + array.join(", ") + "</p>");
    document.write("<p>Кількість чисел: " + array.length + "</p>");
    document.write("<p>Результат: " + result + "</p>");
  }
  
} 
else {
  document.write("<h2>Ви нічого не ввели або скасували дію.</h2>");
}
