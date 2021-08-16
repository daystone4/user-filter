const searchInput = document.querySelector('.search-input')
const output = document.querySelector('.user-list')
const listItems = []

searchInput.addEventListener('input', (e) => filterData(e.target.value))


const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50')
    //destructure the object fetched and pull results array from it
    const { results: users } = await response.json()
    // Clear output
    output.innerHTML = ''
    //  Render users
    users.forEach(user => {
        const listItem = document.createElement('li')
        listItems.push(listItem)

        listItem.innerHTML = 
        `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info"> 
            <h4>${user.name.first} ${user.name.last}</h4>
            <p> ${user.location.city}, ${user.location.country}</p>
        </div
        `
        output.appendChild(listItem)
    })
}

const filterData = (searchTerm) => {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

getUsers()


