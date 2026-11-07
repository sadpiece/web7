function factorial(numb) {
    if (numb <= 1) {
      return 1;
    }
      return numb * factorial(numb - 1);
}

const input = prompt("Введіть додатне число:", "");

if (input !== null && input.trim() !== "") {
      
	const numb = Number(input);

        if (isNaN(numb) || numb < 0) {
        document.write("<h2>Будь ласка, введіть коректне додатне число.</h2>");
        } 
        else {
          const result = factorial(numb);

          document.write("<h2>Обчислення факторіала</h2>");
          document.write("<p>Ви ввели число: " + numb + "</p>");
          document.write("<p>Результат: " + numb + "! = " + result + "</p>");
        }
} 
else {
document.write("<h2>Ви нічого не ввели або скасували дію.</h2>");
}
