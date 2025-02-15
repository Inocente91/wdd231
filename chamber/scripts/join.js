
if (document.getElementById('timestamp')) {
    document.getElementById('timestamp').value = new Date().toISOString();
}


document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href');
        const modal = document.querySelector(modalId);
        if (modal) modal.showModal();
    });
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('dialog');
        if (dialog) dialog.close();
    });
});


const params = new URLSearchParams(window.location.search);

document.getElementById('name').textContent =
    `${params.get('firstName')} ${params.get('lastName')}`;
document.getElementById('email').textContent = params.get('email');
document.getElementById('phone').textContent = params.get('phone');
document.getElementById('business').textContent = params.get('business');
document.getElementById('timestamp').textContent =
    new Date(params.get('timestamp')).toLocaleString();
