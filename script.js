// Todo array

const todos = [{
    text: 'Study JavaScript',
    completed: false
}, {
    text: 'Wash my tennis shoes',
    completed: true
}, {
    text: 'Study french grammar',
    completed: false
}, {
    text: 'Continue practicing HTML and CSS',
    completed: true
}, {
    text: 'Practice Yoga',
    completed: false
}]

const filters = {
    searchText: ''
}

// Render filtered todos

let filterTodos = function (array, filter) {

    let filteredTodos = array.filter(function (object) {
        return object.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    document.querySelector('#filtered-todos').innerHTML = ''

    if (filter.searchText.length === 0) {
        let noTodo = document.createElement('p')
        noTodo.textContent = ''
        document.querySelector('#filtered-todos').appendChild(noTodo)
    } else {
        filteredTodos.forEach(function (object) {
            let filteredTodo = document.createElement('p')
            filteredTodo.textContent = object.text
            document.querySelector('#filtered-todos').appendChild(filteredTodo)
        })
    }
}

filterTodos(todos, filters)

// Render all todos

let createTodos = function (array) {
    array.forEach(function (object) {
        let todo = document.createElement('p')
        todo.textContent = object.text
        document.querySelector('#todos').appendChild(todo)
    })
}

createTodos(todos)

// Button event listener

document.querySelector('#addTodoForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let todo = e.target.elements.addTodoInput.value
    todos.push({text: todo, completed: false})
    e.target.elements.addTodoInput.value = ''
    document.querySelector('#todos').innerHTML = ''
    createTodos(todos)
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

// Filter uncompleted todos

let uncompletedTodos = function (array) {
    return array.filter(function (object) {
        return object.completed === false
    })
}

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