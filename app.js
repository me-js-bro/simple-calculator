// Select all buttons inside the calculator
const buttons = document.querySelectorAll('.btns button');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.blur(); // Remove focus after click

    const text = button.textContent.trim();
    const display = document.querySelector('.display .calc');
    let calcText = display.textContent.trim();

    // Handle different button clicks
    if (text === 'Ac') {
      // All clear
      display.textContent = '0';
    } else if (text === 'C') {
      // Clear last entry
      display.textContent = calcText.slice(0, -1);
      if (display.textContent === '') {
        display.textContent = '0';
      }
    } else if (text === '=') {
      // Evaluate the expression
      try {
        const result = eval(calcText);
        display.textContent = result;
      } catch (error) {
        display.textContent = 'Error';
      }
    } else {
      // Append the clicked button text to the display
      if (calcText === '0') {
        calcText = '';
      }
      display.textContent = calcText + text;
    }
  });
});