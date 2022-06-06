SUBMIT = document.getElementById('formSubmit')

let checking = () => {
    let u = document.getElementById('username').value;
    let e = document.getElementById('email').value;
    let p = document.getElementById('pass').value;
    let cp = document.getElementById('cpass').value;

    if (localStorage.getItem('users')!=null){
        user1 = localStorage.getItem('users');
        userlist = [];
        for (i = 0; i < JSON.parse(user1).length; i++) { console.log(userlist.push(JSON.parse(user1)[i][0])) }
        console.log(userlist)
        if (userlist.includes(u)) {
            alert(`Please change your username.. It's already taken`)}
        else {
            if (p === cp) {
                usersstr = localStorage.getItem('users');
                userarray = JSON.parse(usersstr);
                userarray.push([u, e, p, cp]);
                localStorage.setItem('users', JSON.stringify(userarray))
                window.location.href = 'login2.html'
            }
            else {
                alert('Your Password and Confirm Password is not matching')
            }
        }

    }
    else {
        if (p === cp) {
            if (localStorage.getItem('users') == null) {
                userarray = [];
                userarray.push([u, e, p, cp]);
                localStorage.setItem('users', JSON.stringify(userarray))
                window.location.href = 'login2.html'
            }
            else {
                usersstr = localStorage.getItem('users');
                userarray = JSON.parse(usersstr);
                userarray.push([u, e, p, cp]);
                localStorage.setItem('users', JSON.stringify(userarray))
                window.location.href = 'login2.html'
            }
        }
        else {
            alert('Your Password and Confirm Password is not matching')
        }
    }

    console.log(u);
    console.log(e);
    console.log(p);
    console.log(cp);
};


SUBMIT.addEventListener('click', checking);