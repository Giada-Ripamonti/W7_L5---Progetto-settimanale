let usersList = '../json/users.json';

fetch(usersList).then(response => {
   return response.json();
})
.then(usersData => usersCards(usersData));

function usersCards(users) {
    let container = document.querySelector('#usersCard');
    users.forEach(e => {
        let card = document.createElement('div');
        container.appendChild(card);

        let user = document.createElement('h2');
        user.innerHTML = `${e.firstName} ${e.lastName}`;
        let profile = document.createElement('img');
        profile.src =  `${e.profileURL}`;
        let gender = document.createElement('p');
        gender.innerHTML = `Gender: <span>${e.gender}</span>`;
        let userName = document.createElement('p');
        userName.innerHTML = `Username: <span>${e.username}</span>`;
        let email = document.createElement('p');
        email.innerHTML = `Email: <span>${e.email}</span>`;
        card.appendChild(user);
        card.appendChild(profile);
        card.appendChild(gender);
        card.appendChild(userName);
        card.appendChild(email);
    });
};