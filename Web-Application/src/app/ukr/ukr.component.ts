import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ukr',
  templateUrl: './ukr.component.html',
  styleUrls: ['./ukr.component.css']
})
export class UkrComponent implements OnInit {

  show = false;
  welcomeShow = false;
  noShow = true;
  mainShow = true;
  noReg = false;

  constructor() { }

  ngOnInit(): void {
  }

  reg(): void {
    this.noReg = !this.noReg;
    this.show = !this.show;
    this.noShow = !this.noShow;
    const getSel = s => document.querySelector(s);
    getSel('.noReg').textContent = '';
  }

  add(): void {
    const getSel = s => document.querySelector(s);
    const email = getSel('.email').value;
    const uname = getSel('.uname').value;
    const password = getSel('.psw').value;
    const passwordAgain = getSel('.pswagain').value;
    let users = [];
    if (email === '' || uname === '' || password === '' || passwordAgain === '') {
      alert('Заповніть всі поля');
    } else if (passwordAgain !== '' && password !== passwordAgain) {
      alert('Другий раз неправильно введений пароль');
    } else {
      console.log('lolo');
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
      this.mainShow = !this.mainShow;
      this.welcomeShow = !this.welcomeShow;

    }

  }
  enter(): void {
    const getSel = s => document.querySelector(s);
    const uname = getSel('.firstUname').value;
    const password = getSel('.firstPsw').value;
    const login = JSON.parse(localStorage.getItem('users'));

    if (uname === '' || password === '') {
      alert('Заповніть всі поля');
    } else if (uname !== '' || password !== '') {
      let i;
      for (i = 0; i < login.length; i++) {
        const testUname = login[i].uname;
        const testPsw = login[i].password;

        if (uname === testUname && password === testPsw) {
          this.mainShow = !this.mainShow;
          this.welcomeShow = !this.welcomeShow;
        } else {
          this.noReg = true;
        }
      }
    }
  }


}
