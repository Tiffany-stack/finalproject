// Listen for enter key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Generate a random position for the cash
      const randomX = Math.random() * window.innerWidth;
      const randomRotation = Math.random() * 360;
  
      const cash = document.createElement('div');
      cash.classList.add('cash');
      cash.textContent = '$'; // Dollar sign representation
      cash.style.left = `${randomX}px`;
      cash.style.transform = `rotate(${randomRotation}deg)`;
      document.body.appendChild(cash);
  
      // Remove the cash element after the animation ends
      cash.addEventListener('animationend', () => {
        cash.remove();
      });
    }
  });
  
  import { fetchExpenses, addExpense } from './expensesApi.js';
  
  const expenseForm = document.getElementById('expenseForm');
  const expensesContainer = document.getElementById('expensesContainer');
  
  // Initial load of expenses
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const expensesData = await fetchExpenses();
      displayExpenses(expensesData);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  });
  
  // Handle form submission to add new expense
  expenseForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const expenseDate = document.getElementById('expenseDate').value;
    const expenseAmount = document.getElementById('expenseAmount').value;
    const expenseCategory = document.getElementById('expenseCategory').value;
    const expenseDescription = document.getElementById('expenseDescription').value;
    
    try {
      await addExpense(expenseDate, expenseAmount, expenseCategory, expenseDescription);
      const expensesData = await fetchExpenses();
      displayExpenses(expensesData);
      expenseForm.reset(); // Reset form fields
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  });
  
  function displayExpenses(expensesData) {
    expensesContainer.innerHTML = '';
  
    expensesData.forEach(expense => {
      const expenseElement = document.createElement('div');
      expenseElement.classList.add('expense');
      expenseElement.innerHTML = `
        <h2>${expense.date}</h2>
        <p>Amount: ${expense.amount}</p>
        <p>Category: ${expense.category}</p>
        <p>Description: ${expense.description}</p>
      `;
      expensesContainer.appendChild(expenseElement);
    });
  }
  