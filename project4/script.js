document.addEventListener("DOMContentLoaded" , () => {
    const ExpenseForm = document.getElementById("expense-form")
    const ExpenseName = document.getElementById("expense-name")
    const ExpenseAmount = document.getElementById("expense-amount")
    const ExpenseList = document.getElementById("expense-list")
    const Total = document.getElementById("total")
    const TotalExpense = document.getElementById("total-amount")

    let expenses = JSON.parse(localStorage.getItem("MyExpenses")) || []
    let totalAmount = calculateTotal()

    renderExpense()

    ExpenseForm.addEventListener("submit" , (event) => {
        event.preventDefault()
        const name = ExpenseName.value.trim()
        const amount = parseFloat(ExpenseAmount.value.trim())
        
        if (name !== "" && !isNaN(amount) && amount > 0) {
            const NewExpense = {
                id : Date.now(),
                name,
                amount,
            }
            expenses.push(NewExpense)
            saveExpenses()
            updateTotal()
            renderExpense()

            // clearing Input 
            ExpenseName.value = ""
            ExpenseAmount.value = ""
        }
    })

    function renderExpense() {
    ExpenseList.innerHTML = "";

    if (expenses.length !== 0) {
        expenses.forEach((expense) => {
            const AddExpense = document.createElement("li");
            AddExpense.className = "flex justify-between items-center bg-gray-700 text-white p-2 rounded mb-2"; // optional Tailwind styling
            AddExpense.innerHTML = `
                <span>${expense.name} - Rs ${expense.amount.toFixed(2)}</span>
                <button data-id="${expense.id}" class="delete-btn bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
            `;
            ExpenseList.appendChild(AddExpense);
        });
    }
}

    function updateTotal(){
        totalAmount = calculateTotal()
        TotalExpense.textContent = totalAmount.toFixed(2)
    }


    function calculateTotal(){
        return expenses.reduce((sum,expenses) => (sum + expenses.amount) , 0)
    }

    function saveExpenses(){
        localStorage.setItem("MyExpenses" , JSON.stringify(expenses))
    }

    ExpenseList.addEventListener("click" , (event1) => {
        if (event1.target.tagName === "BUTTON") {
            const Deleteid = parseInt(event1.target.getAttribute('data-id'))
            expenses = expenses.filter(expense => expense.id !== Deleteid)

            saveExpenses()
            calculateTotal()
            updateTotal()
            renderExpense()
        }
    })
})