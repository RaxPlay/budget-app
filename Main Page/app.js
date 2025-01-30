const addBtn = document.querySelector('.add-expenses');
const displayExpenses = document.querySelector('.display-expenses')
let totalBalance = 3000;
const addExpense = document.querySelector('.add-expense-text');



addBtn.addEventListener('click', function(){
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add('new-expense-div')
        
    const expensePricelabel = document.createElement('label')
    expensePricelabel.innerText = 'price?'
    expensePricelabel.classList.add('expenseLabel')

    const expenseCost = document.createElement('input');
    expenseCost.classList.add('expense');

    const submitCost = document.createElement('button');
    submitCost.classList.add('submit-cost');
    submitCost.innerText = 'Add Cost'
    const newExpense = document.createElement('p');
    newExpense.innerText = addExpense.value;
    newExpense.classList.add('expense-text');

    displayExpenses.append(expenseDiv);
    expenseDiv.append(newExpense, expensePricelabel, 
    expenseCost, submitCost)

    addExpense.value = ''
    submitCost.addEventListener('click', function(){
        submitCost.remove()
        expenseCost.remove()
        expensePricelabel.remove()

        newExpense.classList.add('newExpense-moved')
        const FinalExpenseCost = document.createElement('p')
        FinalExpenseCost.innerText = `${expenseCost.value}$`
        FinalExpenseCost.classList.add('FinalExpenseValue')

        expenseDiv.append(FinalExpenseCost)
    })
})