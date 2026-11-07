
    let numberOfRecusrionCalls = 0;
    let numberOfMemoCalls = 0;

    function fibonachiRecursion(number) {
      numberOfRecusrionCalls++;
      if (number <= 1) {
        return 1;
      }
      return fibonachiRecursion(number - 1) + fibonachiRecursion(number - 2);
    }

    function createFibonachiMemo() {
      const cache = {}; 

      function fibonachiMemo(number) {
        numberOfMemoCalls++;

        if (number <= 1) {
          return 1;
        }
        if (number in cache) {
          return cache[number];
        } 
        
        let res = fibonachiMemo(number - 1) + fibonachiMemo(number - 2);
        cache[number] = res;

        return res;
      }
      return fibonachiMemo; 
    }

    const fibonachiMemo = createFibonachiMemo();

    const input = prompt("Введіть число:");

    if (input !== null && input.trim() !== "") {
      const num = Number(input);

      if (isNaN(num) || num < 0) {
        document.write("<h2>Помилка. Введіть додатне число.</h2>");
      } 
      else {
        document.write("<h2>Обчислення Фібоначчі для числа " + num + "</h2>");

        const memoResult = fibonachiMemo(num);
        

        document.write(`
          <div class="result-box memo">
            <h3>З мемоїзацією (Швидко)</h3>
            <p><b>Результат:</b> ${memoResult}</p>
            <p><b>Кількість викликів функції:</b> ${numberOfMemoCalls}</p>
          </div>
        `);
            
 	const recursionResult = fibonachiRecursion(num);
        document.write(`
            <div class="result-box recursion">
              <h3>Звичайна рекурсія (Без кешу)</h3>
              <p><b>Результат:</b> ${recursionResult}</p>
              <p><b>Кількість викликів функції:</b> ${numberOfRecusrionCalls}</p>
            </div>
          `);
        
      }
    } 
    else {
      document.write("<h2>Ви скасували введення.</h2>");
    }
