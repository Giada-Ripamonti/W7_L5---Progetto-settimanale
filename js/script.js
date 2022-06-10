fetch('../json/users.json').then(response => {
   return response.json();
})

.then(usersData => usersCards(usersData));

function usersCards(users) {
    let container = document.querySelector('#usersCard');
    users.forEach(e => {
        let card = document.createElement('div');
        card.innerHTML =    `
                            <h2>${e.firstName} ${e.lastName}</h2>
                            <img src="${e.profileURL}" alt="">
                            <p>Gender: <span>${e.gender}</span></p>
                            <p>Username: <span>${e.username}</span></p>
                            <p>Email: <span>${e.email}</span></p>
                            `
        container.appendChild(card);
    });
};