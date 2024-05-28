const users = [
    { id: 1, username: 'Ken', password: hashPassword('qwert') },
    { id: 2, username: 'Ben', password: hashPassword('yuiop') },
    { id: 3, username: 'Ten', password: hashPassword('agsdf') }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const hashedPassword = hashPassword(password);

    const user = users.find(user => user.username === username && user.password === hashedPassword);

    if (user) {
        alert('Login successful');
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
});

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; 
    }
    return hash;
}
