document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === 'Admin' && password === 'GDT') {

        window.location.href = 'landingPage.html';
    } else {

        alert('Invalid credentials');
    }
});