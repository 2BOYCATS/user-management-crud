const API_URL = 'http://localhost:3000/users'
const formEditUser = document.getElementById('formEditUser')
const exit = document.getElementById('exit')

const id = new URLSearchParams(location.search).get('id') 
console.log(id)

const getUser = async() => {
    try {
        const res = await fetch(`${API_URL}/${id}`, {method: 'GET'})
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        const user = await res.json()
        // console.log(user)
        document.getElementById('firstname').value = user.first_name
        document.getElementById('lastname').value = user.last_name
        document.getElementById('email').value = user.email
    } catch (error) {
        console.log(error)
    }
}

const putUser = async(updateUser) => {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateUser)
        })
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        window.close()
        
    } catch (error) {
        console.log(error)
    }
}


formEditUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const updateUser = {
        first_name: document.getElementById('firstname').value.trim(),
        last_name: document.getElementById('lastname').value.trim(),
        email: document.getElementById('email').value.trim()
    }
    putUser(updateUser)
})

exit.addEventListener('click', (e) => {
    e.preventDefault()
    window.close()
})

getUser()