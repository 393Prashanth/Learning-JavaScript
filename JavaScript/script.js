function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function generateNumbers(numCount) {
    const container = document.getElementById('numbers-container');
    container.innerHTML = ''; // Clear previous numbers
    
    for (let i = 1; i <= numCount; i++) {
      const numberDiv = document.createElement('div');
      numberDiv.textContent = i;
      numberDiv.classList.add('number');
      if (i % 2 === 0) {
        numberDiv.classList.add('even');
      } else {
        numberDiv.classList.add('odd');
      }
      if (isPrime(i)) {
        numberDiv.classList.add('prime');
      }
      container.appendChild(numberDiv);
    }
  }
  
  // Generate numbers and display them
  generateNumbers(100);
  