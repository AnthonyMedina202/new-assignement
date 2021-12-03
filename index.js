
const name = document.getElementById("name")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let message = []
    if (name.value === '' || name.value == null) {
        message.push("Name is required")
    }
    

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = message.join(',')
    }
})