const kartochki = document.getElementById('kartochki');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        data.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                 <h3>${user.name}</h3>
            <p>📧 ${user.email}</p>
            <p>📞 ${user.phone}</p>
            <p>🏠 ${user.address.city}, ${user.address.street}</p>
            `;

            kartochki.appendChild(card);
        });
    })