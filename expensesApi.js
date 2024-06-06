let expensesData = [
    { date: '2024-06-01', amount: 50, category: 'Groceries', description: 'Weekly grocery shopping' },
    { date: '2024-06-02', amount: 30, category: 'Eating Out', description: 'Lunch with friends' },
    { date: '2024-06-03', amount: 100, category: 'Shopping', description: 'New clothes' },
    { date: '2024-06-04', amount: 20, category: 'Transportation', description: 'Bus fare' },
    { date: '2024-06-05', amount: 80, category: 'Entertainment', description: 'Movie night' }
  ];
  
  export async function fetchExpenses() {
    // Simulated asynchronous fetch operation (can be replaced with actual API call)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(expensesData);
      }, 1000); // Simulate delay for loading
    });
  }
  
  export async function addExpense(date, amount, category, description) {
    // Simulated asynchronous add operation (can be replaced with actual API call)
    return new Promise(resolve => {
      setTimeout(() => {
        expensesData.push({ date, amount, category, description });
        resolve();
      }, 500); // Simulate delay for adding
    });
  }
  