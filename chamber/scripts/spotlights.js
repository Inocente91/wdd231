fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const qualified = data.members.filter(member =>
            [2, 3].includes(member.membershipLevel)
        );
        const shuffled = qualified.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        const container = document.querySelector('.spotlight-grid');
        container.innerHTML = ''; // Clear existing content
        selected.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership: ${member.membershipLevel === 2 ? 'Silver' : 'Gold'}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading members:', error));