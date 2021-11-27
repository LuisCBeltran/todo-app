let items = document.querySelectorAll('p')

items.forEach(function (item) {
    if (item.textContent.includes('my')) {
        item.remove()
    }
})