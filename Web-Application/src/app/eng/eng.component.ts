import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eng',
  templateUrl: './eng.component.html',
  styleUrls: ['./eng.component.css']
})
export class EngComponent implements OnInit {

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
      alert('Fill all fields');
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
      alert('Fill all fields');
    } else {
      let i;
      for (i = 0; i < login.length; i++) {
        const testUname = login[i].uname;
        const testPsw = login[i].password;
        console.log(uname, testUname);
        if (uname === testUname && password === testPsw) {
          this.mainShow = !this.mainShow;
          this.welcomeShow = !this.welcomeShow;
          console.log(uname, testUname);
        } else {
          this.noReg = true;
        }
      }
    }
  }


}
