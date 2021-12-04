// Todo array

let todos = getSavedTodos()

const filters = {
    searchText: ''
}

filterTodos(todos, filters)

createTodos(todos)

// Button event listener

document.querySelector('#addTodoForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let todo = e.target.elements.addTodoInput.value
    todos.push({id: uuidv4(), text: todo, completed: false})
    e.target.elements.addTodoInput.value = ''
    document.querySelector('#todos').innerHTML = ''
    createTodos(todos)
    saveTodos(todos)
    let numOfTodosLeft = document.createElement('h2')
    document.querySelector('#leftTodos').innerHTML = ''
    numOfTodosLeft.textContent = `You have ${uncompletedTodos(todos).length} todos left.`
    document.querySelector('#leftTodos').appendChild(numOfTodosLeft)
})

// Input event listener

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    filterTodos(todos, filters)
})

// Number of uncompleted todos

let numOfTodosLeft = document.createElement('h2')
numOfTodosLeft.textContent = `You have ${uncompletedTodos(todos).length} todos left.`
document.querySelector('#leftTodos').appendChild(numOfTodosLeft)

// Hide completed with checkbox

document.querySelector('#checkbox').addEventListener('change', function (e) {
    if (!e.target.checked) {
        document.querySelector('#todos').innerHTML = ''
        createTodos(todos)
    } else {
        document.querySelector('#todos').innerHTML = ''
        createTodos(uncompletedTodos(todos))
    }
})