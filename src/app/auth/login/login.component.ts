import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    name: '', password: ''
  };

  invalidLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {

    this.authService.login(this.userLogin).subscribe(

      (response) => {
        if (response) {
          this.router.navigate(['/']);
        }
        else {
            this.invalidLogin = true;
        }
      }

    );

  }

}
