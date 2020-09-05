async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post', 
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok){
        alert('logged out');
        console.log('logout');
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout)