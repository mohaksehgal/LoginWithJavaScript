formSubmit1.onclick = () => {
    u1 = document.getElementById('username').value
    p1 = document.getElementById('pass').value

    if (localStorage.getItem('users') == null) {
        window.location.href = 'login.html'
    }
    else {
        array1 = JSON.parse(localStorage.getItem('users'));
        console.log(array1.length - 1===1)
        for (let i = 0; i < array1.length; i++) {
            if (u1 === array1[i][0]) {
                if (p1 === array1[i][2]) {
                    console.log('check')
                    window.location.href = 'finalpage.html'
                    localStorage.setItem('new user',u1)
                    return
                }
                else {
                    window.alert('Incorrect Password')
                    return
                }
            }
            else if (i === array1.length - 1) {
                window.alert('Incorrect Username')
                console.log(array1.length - 1)
            }
        }
    }
};