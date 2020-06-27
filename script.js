let getSel = s => document.querySelector(s);

getSel('.registration').style.display = 'none';
getSel('.exit').style.display = 'none';
getSel('.noReg').style.display = 'none';
getSel('.welcome').style.display = 'none';

window.location.href = 'index.html#';
let users = [];

let language = {
    eng: {
        submit: 'Enter',
        email: 'Email',
        uname: 'Login',
        psw: 'Password',
        pswagain: "Pssword again",
        reg: 'Registration',
        language: 'Select a language',
        placeholderEmail: 'Enter email',
        placeholderLogin: 'Enter login',
        placeholderPsw: 'Enter password',
        placeholderPswAgain: 'Enter password again',
    },
    ukr: {
        submit: 'Увійти',
        email: 'Пошта',
        uname: 'Логін',
        psw: 'Пароль',
        pswagain: 'Повторний пароль',
        reg: 'Зареєструватись',
        language: 'Виберіть мову:',
        placeholderEmail: 'Ваша пошта',
        placeholderLogin: 'Ваш логін',
        placeholderPsw: 'Ваш пароль',
        placeholderPswAgain: 'Введіть пароль ще раз',
    }
};

getSel('.eng').onclick = function () {
    getSel('.exit').style.display = 'flex';

    window.location.hash = '#eng';
    if (window.location.hash === '#eng') {
        getSel('.submit').textContent = language.eng.submit;
        getSel('.emailLabel').textContent = language.eng.email;
        getSel('.email').placeholder = language.eng.placeholderEmail;
        getSel('.uname').placeholder = language.eng.placeholderLogin;
        getSel('.psw').placeholder = language.eng.placeholderPsw;
        getSel('.pswagain').placeholder = language.eng.placeholderPswAgain;
        getSel('.firstUname').placeholder = language.eng.placeholderLogin;
        getSel('.firstPsw').placeholder = language.eng.placeholderPsw;
        getSel('.unameLabel').textContent = language.eng.uname;
        getSel('.pswLabel').textContent = language.eng.psw;
        getSel('.pswagainLabel').textContent = language.eng.pswagain;
        getSel('.firstUnameLabel').textContent = language.eng.uname;
        getSel('.firstPswLabel').textContent = language.eng.psw;
        getSel('.enter').textContent = language.eng.submit;
        getSel('.reg').textContent = language.eng.reg;
        getSel('.selectLanguage').textContent = language.eng.language;
    }
}

getSel('.ukr').onclick = function () {
    getSel('.exit').style.display = 'flex';

    window.location.hash = '#ukr';
    if (window.location.hash === '#ukr') {
        getSel('.submit').textContent = language.ukr.submit;
        getSel('.emailLabel').textContent = language.ukr.email;
        getSel('.email').placeholder = language.ukr.placeholderEmail;
        getSel('.uname').placeholder = language.ukr.placeholderLogin;
        getSel('.psw').placeholder = language.ukr.placeholderPsw;
        getSel('.pswagain').placeholder = language.ukr.placeholderPswAgain;
        getSel('.firstUname').placeholder = language.ukr.placeholderLogin;
        getSel('.firstPsw').placeholder = language.ukr.placeholderPsw;
        getSel('.unameLabel').textContent = language.ukr.uname;
        getSel('.pswLabel').textContent = language.ukr.psw;
        getSel('.pswagainLabel').textContent = language.ukr.pswagain;
        getSel('.firstUnameLabel').textContent = language.ukr.uname;
        getSel('.firstPswLabel').textContent = language.ukr.psw;
        getSel('.enter').textContent = language.ukr.submit;
        getSel('.reg').textContent = language.ukr.reg;
        getSel('.selectLanguage').textContent = language.ukr.language;
    }
}

getSel('.reg').onclick = function () {
    getSel('.registration').style.display = 'flex';
    getSel('.language').style.display = 'none';
    getSel('.exit').style.display = 'none';

    if (window.location.href === 'index.html#eng') {
        window.location.href = 'index.html#eng';
    } else if (window.location.href === 'index.html#ukr') {
        window.location.href = 'index.html#ukr';
    }
}

getSel('.enter').onclick = function () {

    const uname = getSel('.firstUname').value;
    const password = getSel('.firstPsw').value;
    const labelLogin = getSel('.firstUnameLabel').textContent;

    let login = JSON.parse(localStorage.getItem('users'));

    console.log(login);

    if (labelLogin === 'Login') {
        if (uname === '' || password === '') {
            alert('Fill all field');
        } else if (uname !== '' || password !== '') {
            for (i = 0; i < login.length; i++) {
                let testUname = login[i].uname;
                console.log(login[i].uname);
                let testPsw = login[i].password;
                console.log(login[i].password);

                if (uname === testUname && password === testPsw) {
                    getSel('.container').style.display = 'none';
                    getSel('.welcome').textContent = 'Welcome to site!';
                    getSel('.welcome').style.display = 'flex';
                } else {
                    getSel('.noReg').style.display = 'flex';
                    getSel('.noReg').textContent = 'You are not registrated';
                }
            }
        }
    } else if (labelLogin === 'Логін') {
        if (uname === '' || password === '') {
            alert('Заповніть всі поля');
        } else if (uname !== '' || password !== '') {
            for (i = 0; i < login.length; i++) {
                let testUname = login[i].uname;
                console.log(login[i].uname);
                let testPsw = login[i].password;
                console.log(login[i].password);

                if (uname === testUname && password === testPsw) {
                    getSel('.container').style.display = 'none';
                    getSel('.welcome').style.display = 'flex';
                } else {
                    getSel('.noReg').style.display = 'flex';
                    getSel('.noReg').textContent = 'Ви не зареєстрованні';
                }
            }
        }
    }
}

getSel('.add').onclick = function () {
    const email = getSel('.email').value;
    const uname = getSel('.uname').value;
    const password = getSel('.psw').value;
    const passwordAgain = getSel('.pswagain').value;
    const unameLabel = getSel('.unameLabel').textContent;

    if (unameLabel === 'Логін') {
        if (email === '' || uname === '' || password === '' || passwordAgain === '') {
            alert('Заповніть всі поля');
        } else if (passwordAgain !== '' && password !== passwordAgain) {
            alert('Другий раз неправильно введений пароль');
        } else {
            if (localStorage.length === 0) {
                users.push({
                    email: email,
                    uname: uname,
                    password: password,
                    passwordAgain: passwordAgain
                });
            } else if (localStorage.getItem('users') && localStorage.length !== 0) {
                users = JSON.parse(localStorage.getItem('users'));
                users.push({
                    email: email,
                    uname: uname,
                    password: password,
                    passwordAgain: passwordAgain
                });
            }
            localStorage.setItem('users', JSON.stringify(users));

            getSel('.container').style.display = 'none';
            getSel('.welcome').style.display = 'flex';
        }

    } else if (unameLabel === 'Login') {
        if (email === '' || uname === '' || password === '' || passwordAgain === '') {
            alert('Fill all the fields');
        } else if (passwordAgain !== '' && password !== passwordAgain) {
            alert('Second time password written wrong');
        } else {
            if (localStorage.length === 0) {
                users.push({
                    email: email,
                    uname: uname,
                    password: password,
                    passwordAgain: passwordAgain
                });
            } else if (localStorage.getItem('users') && localStorage.length !== 0) {
                users = JSON.parse(localStorage.getItem('users'));
                users.push({
                    email: email,
                    uname: uname,
                    password: password,
                    passwordAgain: passwordAgain
                });
            }

            localStorage.setItem('users', JSON.stringify(users));

            getSel('.container').style.display = 'none';
            getSel('.welcome').textContent = 'Welcome to site!';
            getSel('.welcome').style.display = 'flex';

        }
    }
}