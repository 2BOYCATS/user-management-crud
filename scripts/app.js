const API_URL = 'http://localhost:3000/users'

const count = document.getElementById('count')
const tableBody = document.getElementById('table-body')
const formAddUser = document.getElementById('formAddUser')
const btnAddUser = document.getElementById('btnAddUser')
const backDrop = document.getElementById('backdrop')

const createRow = ({id, first_name, last_name, email}) => 
`<tr>
    <td>${id}</td>
    <td>${first_name}</td>
    <td>${last_name}</td>
    <td>${email}</td>
    <td>
        <button><a href="formEditUser.html?id=${id}" target="_blank">✏️</a></button>
        <button onclick="deleteUsers('${id}')">🗑️</button>
    </td>
</tr>`


const render = (users) => {
    count.innerHTML = `${users.length} Users`
    tableBody.innerHTML = users.map(createRow).join('')
}

const getUsers = async() => {
    try {
        const res = await fetch(API_URL, {method: "GET"})

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }

        const users = await res.json()
        render(users)
        
    } catch (error) {
        console.log(error)
        tableBody.innerHTML = 
        `<tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>`
    }
}

const postUsers = async(newUser) => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }

        formAddUser.reset()
        formAddUser.classList.remove('showFormAdd')
        backDrop.classList.remove('backdropOpen')
        getUsers()
    } catch (error) {
        console.log(error)       
    }
}

const deleteUsers = async(id) => {
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        getUsers()
    } catch (error) {
        console.log(error)
    }
}


btnAddUser.addEventListener('click', () => {
    formAddUser.classList.toggle('showFormAdd')
    backDrop.classList.toggle('backdropOpen')
})

backDrop.addEventListener('click', () => {
    formAddUser.classList.remove('showFormAdd')
    backDrop.classList.remove('backdropOpen')
})

formAddUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const newUser = {
        first_name: document.getElementById('firstname').value.trim(),
        last_name: document.getElementById('lastname').value.trim(),
        email: document.getElementById('email').value.trim()
    }

    postUsers(newUser)

})

getUsers()