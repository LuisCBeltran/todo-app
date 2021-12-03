//Fetch existing todos from localStorage

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//Save todos to localStorage

const saveTodos = function (array) {
    localStorage.setItem('todos', JSON.stringify(array))
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

// Render all todos

let createTodos = function (array) {
    array.forEach(function (object) {

        let todoContainer = document.createElement('div')
        let checkCompleted = document.createElement('input')
        let todo = document.createElement('span')
        let todoRemoveBtn = document.createElement('button')

        // Set elements to container div
        todoContainer.appendChild(checkCompleted)
        todoContainer.appendChild(todo)
        todoContainer.appendChild(todoRemoveBtn)

        // Give contents to each element
        checkCompleted.setAttribute('type', 'checkbox')
        todo.textContent = object.text
        todoRemoveBtn.textContent = 'X'

        document.querySelector('#todos').appendChild(todoContainer)
    })
}

// Filter uncompleted todos

let uncompletedTodos = function (array) {
    return array.filter(function (object) {
        return object.completed === false
    })
}